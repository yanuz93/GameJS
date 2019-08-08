/*
JavaScript function to create a simple puzzle with an image in canvas
By MarPlo: http://coursesweb.net/javascript/ | http://www.marplo.net/
Receives:
 id_p = ID of element that will contains <canvas>
 im = object (or string URL) with image
 cols = number of columns
 rows = number of rows
 wg = canvas width (optional)
 hg = canvas height (optional)
*/
function PuzzleImg(id_p, im, cols, rows, wg, hg){
  var img ='';  //image object
  var cnt ='';  //canvas content obj.
  var width = wg ? wg :'';  //canvas width. If empty, will have the width of image
  var height = hg ? hg :'';  //canvas height. If empty, will have the height of image
  var id_solv ='';  //ID of button to solve puzzle
  var cols = cols;
  var rows = rows;
  var ukuran_potongan ='';  //obj. sizes of image piece
  var ukuran_wadah =''; //obj. sizes of tiles in canvas
  var posisi_potongan = [];  //array with objects with coords of image pieces {px,py, tx,ty,id}. Set 0 after puzzle completed
  var posisi_wadah = [];  //object with tiles to draw in canvas id:{px,py, tx,ty, ord}
  var tl_h =-1;  //ids of hovered tile
  var tl_c =-1;  //ids of 1st clicked tile of two (-1 from start)
  var solv =0;  //1 when puzzle is solved, -1 when is solved from button
  this.clicks =0;  //nr clicks

  //set <canvas> in $div, and properties: $cnv, $cnt, $img, $ukuran_potongan, $ukuran_wadah
  function setElms(id_p, im){
    //set1 properties
    img = im;
    if(width =='') width = img.width;
    if(height =='') height = img.height;

    //add canvas and solve button
    var parent = document.getElementById(id_p);
    id_solv = id_p +'_solv';
    parent.innerHTML ='<canvas id="'+ id_p +'_cnv" width="'+ width +'" height="'+ height +'" class="puzcnv"></canvas><button id="'+ id_p +'_solv" class="puzsolve">Solve</button><img src="'+ img.src +'" width="'+ width /3 +'" height="'+ height /3 +'" class="puzimg" />';
    parent.style.width = width +2 +'px';;

    //set2 properties
    var cnv = document.getElementById(id_p +'_cnv');
    cnt = cnv.getContext('2d');
    ukuran_potongan = {w:img.naturalWidth /cols, h:img.naturalHeight /rows}; 
    ukuran_wadah = {w:width /cols, h:height /rows};

    setImP();  //set image pieces

    //register click event
    cnv.addEventListener('click', function(ev){
      if(solv ==0){ //if not completed
	this.clicks++;
	var x = ev.offsetX;
	var y = ev.offsetY;

	//detect clicked tile from $posisi_wadah
	for(var id in posisi_wadah){
	  if(y > posisi_wadah[id].ty && y < posisi_wadah[id].ty + ukuran_wadah.h && x > tl_p[id].tx && x < tl_p[id].tx + ukuran_wadah.w){
	    //if 1st tile, add id in $tl_c and draw border, else, swap tiles
	    if(tl_c ==-1){
	      tl_c = id;
	      drawB(2, '#f00', id);
	    }
	    else {
	      var tl2 = {tx:posisi_wadah[id].tx, ty:posisi_wadah[id].ty, ord:tl_p[id].ord};//data of 2nd tile to be added in 1st tile
	      posisi_wadah[id] = {px:posisi_wadah[id].px, py:tl_p[id].py, tx:tl_p[tl_c].tx, ty:tl_p[tl_c].ty, ord:tl_p[tl_c].ord, id:id};  //2nd tl
	      posisi_wadah[tl_c] = {px:posisi_wadah[tl_c].px, py:tl_p[tl_c].py, tx:tl2.tx, ty:tl2.ty, ord:tl2.ord, id:tl_c};  //1st tl
	      drawTL(posisi_wadah);
	      tl_c =-1;
	    }
	    break;
	  }
	}
      }
    });

    //on mousemove
    cnv.addEventListener('mousemove', function(ev){
      if(solv ==0){ //if not completed
	var x = ev.offsetX;
	var y = ev.offsetY;

	//detect clicked tile from $posisi_wadah
	for(var id in posisi_wadah){
	  if(y > posisi_wadah[id].ty && y < posisi_wadah[id].ty + ukuran_wadah.h && x > tl_p[id].tx && x < tl_p[id].tx + ukuran_wadah.w){
	    //if other tile mousemove
	    if(tl_h != id){
	      tl_h = id;
	      drawTL(posisi_wadah);
	      if(tl_c !=-1) drawB(2, '#f00', tl_c);  //for clicked
	      drawB(2, '#f8f900', id);
	    }
	    break;
	  }
	}
      }
    });

    //click to solve puzzle
    document.getElementById(id_solv).addEventListener('click', function(){
      if(id_solv !=''){ solv =-1; drawTL(posisi_potongan);}
    });
  }

  //get image pieces from $img and set it in $posisi_potongan
  function setImP(){
    for(var i=0; i<cols * rows; ++i) {
      var c = Math.floor(i /rows);  var r = i %rows;  //current column /rom of piece in img
      //add in $posisi_potongan object with positions of pieces in image
      posisi_potongan.push({px:c *ukuran_potongan.w, py:r * ukuran_potongan.h, tx:c *ukuran_wadah.w, ty:r *ukuran_wadah.h, id:i, rotate: 0});
    }
    for(var j, x, i = posisi_potongan.length; i; j = Math.floor(Math.random() * i), x = posisi_potongan[--i], posisi_potongan[i] = posisi_potongan[j], posisi_potongan[j] = x);  //shuffle array
    setTL();  //set canvas tiles
  }

  //set tiles in $posisi_wadah from $posisi_potongan
  function setTL(){
    for(var i=0; i<posisi_potongan.length; i++){
      var c = Math.floor(i /rows);  var r = i %rows;  //current column /rom of tile in canvas
      posisi_wadah[posisi_potongan[i].id] = {px:posisi_potongan[i].px, py:posisi_potongan[i].py, tx:c *ukuran_wadah.w, ty:r *ukuran_wadah.h, ord:i};
    }
    drawTL(posisi_wadah);  //draw tiles in canvas
  }

  //draw tiles from $tls
  function drawTL(tls){
    for(var id in posisi_wadah){
      cnt.drawImage(img, tls[id].px, tls[id].py, ukuran_potongan.w, ukuran_potongan.h, tls[id].tx, tls[id].ty, ukuran_wadah.w, ukuran_wadah.h);
    }
    checkPuzzle();  //check if puzzle completed
  }

  //check if tiles are in correct order, else 0
  function checkPuzzle(){
    var re =1;
    if(solv ==0){
      for(var id in posisi_wadah){
	if(id !=posisi_wadah[id].ord){ re =0; break;}
      }
    }
    if(re ==1){
      cnt.drawImage(img, 0, 0, width, height);

      //if solved manually (-1 is auto) calls solved()
      if(solv ==0){
	solv =1;
	this.solved();
      }
    }
  }

  //to draw border with size $sz and color $cl around tile with $id
  function drawB(sz, cl, id){
    cnt.lineWidth = sz;
    cnt.strokeStyle = cl;
    cnt.strokeRect(posisi_wadah[id].tx +1, posisi_wadah[id].ty +1, ukuran_wadah.w -2, ukuran_wadah.h -2);
  }

  //remove button that solves the puzzle
  //this.delSolve = function(){ document.getElementById(id_solv).outerHTML =''; id_solv ='';}

  //called when puzzle is completed
  this.solved = function(){ if(this.clicks >0) alert('Congratulations, you solved the puzzle in '+ this.clicks +' clicks');}

  //if $im is string (image address) create object image and calls setElms(), else setElms()'
  if(typeof im =='string'){
    img = new Image();
    img.onload = function(){ setElms(id_p, img);};
    img.src = im;
  }
  else {
    im.outerHTML ='<div id="'+ id_p +'e" class="puzelm"></div>';  //parent for canvas
    setElms(id_p +'e', im);
  }
}

/*
This function uses PuzzleImg() to replace images in webpage with a puzzle game
Receives:
 slc = selector (CSS syntax) for images in page
 cols = number of columns
 rows = number of rows
 solve = if 0, will remove the button that solves the puzzle
 callback = a function called when the puzzle is completed
*/
function imgToPuzzle(slc, cols, rows, solve, callback){
  var ims = document.querySelectorAll(slc);
  for(var i=0; i<ims.length; i++){
    var ob_puz = new PuzzleImg('puz'+ i, ims[i], cols, rows);
    if(solve ==0) ob_puz.delSolve();  //removes button to auto solve puzzle
    if(callback) ob_puz.solved = callback;
  }
}
