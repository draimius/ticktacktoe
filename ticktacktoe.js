"use strict";
console.log("game on");

///////logic for x n o display [ground work completed]
///////logic for it being two player [ground work completed]
///////logic to display winning move
///////then refine and bug fix
///////any display changed details

// *REVIEW for myt self what do we really need to build here big things are the display changing with every click till game is won
// -so every space click we add either the x or o correspondig to the player (will defaust to 0[x] 1[o] done)
// -the play button /initiation are sort of ectras to just kinda tie everthing together done after all logic
// --the other big thing is kNOWING when the game has been one(we can constently check fucntion run if game has won before swap player)
// herer we need a way to know if the appropriate connection has been made (thinking graph sorts)
// then one we know winnig connectiong display the appropriate strike through for the winnig line positioning
// make the game over(everything should be disabled if game over = true)
// only when the play again button below is clicked then :
// -all values return back to default all div classe back to original, (x n o removed) and strike through removed
// if graph grapth connection or anyvalue adjusted/added ect.. return to default structure
// and good to go again for another game

//we'd like to be page open everything is initialy disabled but the play button
// hit the play button and now everything is active - we display what symbol's turn it is above the board
// player positions symbol , player swap text changes to the current players sybol(x to o player turn)
// and that continues till game is won or its no longer possible to win based on board and xo positions
//

// what do we do if there is no winner (do we cut when all are filled, or when winnig is just not possible anymore)
//dont think we'll actually need node all we really need is to pass in the player value into the matrix
class Node {
  constructor(val) {
    this.val = val;
  }
}

class GameBoard {
  constructor(size = 3) {
    this.gameStarted = false;
    this.gameOver = false;
    this.player = 1;
    this.row1 = new Array(size);
    this.row2 = new Array(size);
    this.row3 = new Array(size);
    this.boardMatrix = [this.row1, this.row2, this.row3];
  }

  addToBoard(element) {
    //once all spots are filled can no longer add(though we want to stop on a win or if no longer possible to win)
    //isures if the right target(we can move this check into the eveny listener maybe so not repeated accross functions)
    if (element.classList[0] === "display") {
      let x = element.getAttribute("data-x-position");
      let y = element.getAttribute("data-y-position");
      if (this.boardMatrix[y][x] === undefined) {
        this.boardMatrix[y][x] = this.player;
        console.log(x, y);
        console.log(this.boardMatrix);
        this.checkIfGameWon();
      }
      //   console.log(element.getAttribute("data-x-position"));
    }
    // console.log(attributes["data-x-position"]);
    // if (attributes["data-x-position"])
    // let y =
    // for (let item in attributes) {
    //   console.log(item);
    // }
  }
  checkIfGameWon() {
    //if any one array cointains all the same value or mathing value then we have a win
    // (00, 01, 02,)/ (10, 11, 12)/ (20, 21, 22)
    //if we have value that existe in all 3 arrays and all in the same index value across all
    // (00, 10, 20)/  (01, 11, 21)/ (02, 12, 22)
    //if we have same value across all array in increaming or decresing order staring from left to right or right ot left
    //(00, 11, 22/ 20, 11, 02)
    //should we just itarate over the whole thing
    for (let i = 0; i < 3; i++) {
      //   this.boardMatrix[i];
      console.log(this.boardMatrix[i]);
      for (let j = 0; j < 3; j++) {
        console.log(this.boardMatrix[i][j]);
      }
    }
  }
  displayStrike() {
    //display winig strike through correnponding to positioning of x and o's
  }
  gameReset() {
    //resert all the values back to default
    this.clearBoard();
  }
  clearBoard() {
    //   clears all classes back to original(spans and strike through div)
  }
  printCurrentPlayer() {}

  printTurn(squareSelected) {
    //attribute look to here later and may not actually greate ideal to do in this method (though are looking to use )
    let nodeMap = squareSelected.attributes;

    //capture the targets children(aka spans)
    let targetChildren = squareSelected.children;
    //checks event target containd 'display' class aka correct element
    if (squareSelected.classList["value"] === "display") {
      for (let child of targetChildren) {
        //checks that children classlist is empty to print else no print
        if (child.classList.value === "") {
          //checks who the current player is
          if (this.player) {
            this.printX(squareSelected);
            this.player = 0;
          } else {
            this.printO(squareSelected);
            this.player = 1;
          }
        }
      }
    }
  }
  printO(parentDiv) {
    let spanShape = parentDiv.children;
    let count = 1;
    for (let span of spanShape) {
      span.classList.add(`data-o${count}`);
      count++;
    }
  }
  printX(parentDiv) {
    let spanShape = parentDiv.children;
    let count = 1;
    for (let span of spanShape) {
      span.classList.add(`data-x${count}`);
      count++;
    }
  }
  winningMove() {
    //checks if the game has been won or if winning is still possible
  }
}

//create new gameboard
let board = new GameBoard();

//all DOM varibles
let frame = document.querySelector("#frame");

//all event listeners
//this creates a listener on whole frame
frame.addEventListener("click", function () {
  let target = event.target;
  board.printTurn(target);
  board.addToBoard(target);
});
