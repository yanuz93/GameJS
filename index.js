const circle = document.getElementById('circle')

var audio = new Audio();
audio.src="img/musik.mp3";
audio.loop= true;
audio.play(); 


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: function(el, i) {
      return 70 * (i+1)
    }
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: function(el, i, l) {
      return 80 * (l - i);
    }
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


/* Shape Square */
/* .square {
    width: 100px;
    height: 100px;
    background: red;
    transform: rotate(250deg)
} */



/* Shape Rectangle */
/* .rectangle {
    width: 200px;
    height: 100px;
    background: red;
  } */


/* Shape Circle  */
/* .circle {
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50%
  } */


  /* Shape Spade */
/* .shape{
    transform: rotate(180deg);
}
.heart {
background-color: red;
display: inline-block;
height: 30px;
margin: 0 10px;
position: relative;
top: 0;/* Shape Diamond */
/* .diamond-narrow {
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom: 70px solid red;
    position: relative;
    top: -50px;
  }
  .diamond-narrow:after {
    content: '';
    position: absolute;
    left: -50px;
    top: 70px;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-top: 70px solid red;
  } */

/* 
body {
background: #490f76;
color: #fff;
font-size: 3em;
margin-top: 1em;
text-align: center;
text-transform: uppercase;
} */
/* 

/* Shape Square */
/* .square {
    width: 100px;
    height: 100px;
    background: red;
    transform: rotate(250deg)
} */



/* Shape Rectangle */
/* .rectangle {
    width: 200px;
    height: 100px;
    background: red;
  } */


/* Shape Circle  */
/* .circle {
    width: 100px;
    height: 100px;
    background: red;
    border-radius: 50%
  } */


  /* Shape Spade */
/* .shape{
    transform: r
transform: rotate(-45deg);
width: 30px;
}

.heart:before,
.heart:after {
content: "";
background-color: red;
border-radius: 50%;
height: 30px;
position: absolute;
width: 30px;
}

.heart:before {
top: -15px;
left: 0;
}

.heart:after {
left: 15px;
top: 0;
}

.tale{
width: 0; 
height: 0; 
border-left: 4px solid transparent;
border-right: 4px solid transparent;
border-top: 20px solid red;
transform: rotate(45deg);
position:absolute;
bottom:20px;
right:-3px
} */