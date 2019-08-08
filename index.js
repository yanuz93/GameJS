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
