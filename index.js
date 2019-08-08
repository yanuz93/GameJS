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
=======
// function shuffle(array) {
//     var tmp,
//       current,
//       top = array.length;
//     if (top)
//       while (--top) {
//         current = Math.floor(Math.random() * (top + 1));
//         tmp = array[current];
//         array[current] = array[top];
//         array[top] = tmp;
//       }
//     return array;
//   }
  
// var canvas = document.querySelector("canvas"),
// ctx = canvas.getContext("2d"),
// keys = {};
// canvas.width = 500;
// canvas.height = 360;

// function Game() {}

// Game.prototype.init = function() {
// puzzle.init();
// gameState.add("game", puzzle);
// gameState.change("game");
// //set up a game, canvas size etc.
// //run on page load or after all images/sounds are loaded.
// this.gameLoop();
// };

// Game.prototype.gameLoop = function() {
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// gameState.update();
// gameState.render();
// //consider using state machine
// //and set up clear rect for each state separately, or let them inherit from main state object
// // this.update();
// // this.render();
// //use game states instead :)
// window.requestAnimationFrame(this.gameLoop.bind(this));
// };

// function PuzzleMachine(rows) {
// this.puzzleList = []; //1D array!
// this.emptyIndex = 0; //Random
// this.rows = rows || 4;
// this.amount = Math.pow(this.rows, 2);
// this.width = Math.floor(canvas.width / this.rows);
// this.height = Math.floor(canvas.height / this.rows);
// }
// PuzzleMachine.extend(StateMachine);
// PuzzleMachine.prototype.init = function() {
// var shuffled;
// ctx.strokeStyle = "green";
// ctx.fillStyle = "green";
// ctx.font = "30px Arial";
// ctx.textBaseline = "middle";
// ctx.textAlign = "center";
// for (var i = 0; i < this.amount; i++) {
//     this.puzzleList[i] = i;
// }
// shuffled = shuffle(this.puzzleList);
// this.puzzleList = shuffled;
// this.emptyIndex = this.puzzleList.indexOf(0);
// console.log(this.puzzleList[0]);
// };

// PuzzleMachine.prototype.update = function() {
// //update based on key press
// var currentPos = this.emptyIndex;
// if (keys[37]) {
//     if (this.emptyIndex % this.rows !== 0) {
//     this.emptyIndex--;
//     keys[37] = false;
//     }
// } else if (keys[38]) {
//     if (this.emptyIndex >= this.rows) {
//     this.emptyIndex -= this.rows;
//     keys[38] = false;
//     }
// } else if (keys[39]) {
//     if (this.emptyIndex % this.rows < 3) {
//     this.emptyIndex++;
//     keys[39] = false;
//     }
// } else if (keys[40]) {
//     if (this.emptyIndex < this.amount - this.rows) {
//     this.emptyIndex += this.rows;
//     keys[40] = false;
//     }
// }
// if (this.emptyIndex !== currentPos) {
//     this.puzzleList[currentPos] = this.puzzleList[this.emptyIndex];
//     console.log(this.emptyIndex);
// }
// };

// PuzzleMachine.prototype.render = function() {
// var num = -1;
// for (var i = 0; i < this.rows; i++) {
//     for (var j = 0; j < this.rows; j++) {
//     if (++num !== this.emptyIndex) {
//         ctx.fillRect(
//         j * this.width + 1,
//         i * this.height + 1,
//         this.width - 2,
//         this.height - 2
//         );
//         ctx.save();
//         ctx.strokeStyle = "#045FB4";
//         ctx.lineWidth = 2;
//         ctx.strokeRect(
//         j * this.width,
//         i * this.height,
//         this.width,
//         this.height
//         );
//         ctx.fillStyle = "white";
//         ctx.fillText(
//         this.puzzleList[num],
//         j * this.width + this.width / 2,
//         i * this.height + this.height / 2
//         );
//         ctx.restore();
//     }
//     }
// }
// num = 0;
// };

// var game = new Game();

// var gameState = new StateMachine();
// var puzzle = new PuzzleMachine();
// game.init(); //might call this after loading images/sound

// window.addEventListener("keydown", function(e) {
// keys[e.keyCode] = true;
// });
// window.addEventListener("keyup", function(e) {
// keys[e.keyCode] = false;
// });
// $("#restart").click(function() {
// puzzle = new PuzzleMachine();
// puzzle.init();
// game.init();
// });
// $("#4row").click(function() {
// puzzle = new PuzzleMachine(4);
// puzzle.init();
// game.init();
// });
// $("#6row").click(function() {
// puzzle = new PuzzleMachine(6);
// puzzle.init();
// game.init();
// });
// $("#8row").click(function() {
// puzzle = new PuzzleMachine(8);
// puzzle.init();
// game.init();
// });