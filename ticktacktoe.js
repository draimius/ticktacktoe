"use strict";
console.log("game on");

///////logic for x n o display [ground work completed]
///////logic for it being two player [ground work completed]
///////logic to display winning move
///////then refine and bug fix
///////any display changed details
/////initiate game with play button click (nothing should work till initiation takes place)
//// (also when game over all functionality should turn off , once game is won  )
/// not till play again button clicked then we can reset everything and game is resarted

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
  initiate() {
    this.gameStarted = true;
  }
  gameReset() {
    //resert all the values back to default
    this.clearBoard();
  }
  clearBoard() {
    //   clears all classes back to original(spans and strike through div)
  }
  printCurrentPlayer() {}
  addToBoard(element) {
    if (element.classList[0] === "display") {
      let x = element.getAttribute("data-x-position");
      let y = element.getAttribute("data-y-position");
      if (this.boardMatrix[y][x] === undefined) {
        this.boardMatrix[y][x] = this.player;
        this.rowWin(x, y);
        this.coloumnWin(x, y);
        this.diagonalWin();
      }
    }
  }
  diagonalWin() {
    let mustMatch = this.boardMatrix[1][1];
    console.log(mustMatch);
    let topLeft = this.boardMatrix[0][0];
    let topRight = this.boardMatrix[0][2];
    let strikeValue;
    if (mustMatch !== undefined) {
      if (topLeft === mustMatch) {
        if (this.boardMatrix[2][2] === mustMatch) {
          strikeValue = "d2";
          this.displayStrike(strikeValue);
        }
      }
      if (topRight === mustMatch) {
        if (this.boardMatrix[2][0] === mustMatch) {
          strikeValue = "d1";
          this.displayStrike(strikeValue);
        }
      }
    }
  }
  coloumnWin(x, y) {
    let value = this.boardMatrix[y][x];
    let strikeValue = Number(x) + 1;
    if (value !== undefined) {
      for (let i = 0; i < 3; i++) {
        let capture = this.boardMatrix[i][x];
        console.log(value, capture);
        if (value !== capture) {
          return;
        }
      }
    }
    this.displayStrike("v" + strikeValue);
  }
  rowWin(x, y) {
    let rowCheck = this.boardMatrix[y];
    let value = rowCheck[x];
    let strikeValue = Number(y) + 1;
    if (value !== undefined) {
      for (let item of rowCheck) {
        if (item !== value) {
          return;
        }
      }
      this.displayStrike("h" + strikeValue);
    }
  }

  displayStrike(strikeValue) {
    console.log("winner winner chicken dinner");
    switch (strikeValue) {
      case "h1":
        strike.classList = "horizontal-1";
        break;
      case "h2":
        strike.classList = "horizontal-2";
        break;
      case "h3":
        strike.classList = "horizontal-3";
        break;
      case "v1":
        strike.classList = "vertical-1";
        break;
      case "v2":
        strike.classList = "vertical-2";
        break;
      case "v3":
        strike.classList = "vertical-3";
        break;
      case "d1":
        strike.classList = "diagonal-2";
        break;
      case "d2":
        strike.classList = "diagonal-1";
        break;
      default:
        break;
    }
    //if this ever runs that mean a winning move has been made and should be over
    //maybe add function but not sure just yet
  }

  printTurn(squareSelected) {
    let targetChildren = squareSelected.children;
    if (squareSelected.classList["value"] === "display") {
      for (let child of targetChildren) {
        if (child.classList.value === "") {
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
}

//CREATE NEW GAME BOARD
let board = new GameBoard();

//ALL DOM VARIBLES
let frame = document.querySelector("#frame");
let strike = document.querySelector("#strike");
let playButton = document.querySelector("#play-button");
let playerText = document.querySelector("#player-text");

//ALL EVENT LISTENERS
frame.addEventListener("click", function () {
  if (board.gameStarted) {
    let target = event.target;
    board.printTurn(target);
    board.addToBoard(target);
  }
});

playButton.addEventListener("click", function () {
  board.initiate();
});
