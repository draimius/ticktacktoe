"use strict";
console.log("game on");

class GameBoard {
    constructor() { }
}

let tack = new GameBoard();

///////logic for x n o display
///////logic for it being two player (switch back n forth)
///////logic to display winning move
///////then refine and bug fix
///////any display changed details

//how should we build this ????
//-should i do it like we did that calc think soo that work
//-than just have like calc, functions run on event listeners
//steps:we want to in pseudo code and just english
//---define all function action that will be need
//--then how we will implement them and how they will work together
//once we have to whole and actions structure
//we will define all var's need like the board, grid, buttons ect...
//after that we start working on the functions
//any helper funciton needed ect...
//then with all function done
//we work on implementing them with event listeners (what needs everylistners???)
//and from there we just test everything

//what are our inputs?
//--thinking should we have a button to "start game" and "restart"
//--or should there just not be a start button
//--we will have to have a resart/play again button have on screen from start
//--or it shows up once the game is over....
//--think just both then have a play and playagain / have it be same button but changes
//--based on the the state of the game (aka gameover = true or false)
//though adding a button for play/play again may effect current layout (ahh that's bs can make it work ez)
//

//-input are button clicks in one of the 9 squares
//-when clicked it should fill in the space clicked with respective x or o(vary on player)
//-then the clikcing and filling with shape continues
//-till we have 3 of one shape in a row wether vertical, horizontal, diagonal
//-when that happends the game is over
//-
//-
//-

//say we get started on the simple started stuff needed like display stuff
//then with all that just implement greater logic for all that to work together with all
//--game conditions and "rules"
//what are the output/result we want

//add buttons for play and play again

// let test = document.querySelector('[data')
// what if i just use the data tad to grab all of the span id use for the x n o's display
//- the we add call loopoing through add the spans and see which span/location box
// span data box value matches the whole div box value

//=============================function for displaying the x's and o's in all boxes======================
//do not yet contain any checks to insure corrent value are being passed into funcitons
//function takes parent node as input and add X's to square selected
function addXs(ParentDiv) {
    //add in each of there that the tartget must be a div containig the 'display' class
    //--else dont run below(havent checked what happens if hit something else lets see) - very funcky stuff happends
    let spanShape = ParentDiv.children;
    let count = 1;
    for (let span of spanShape) {
        console.log(span);
        span.classList.add(`data-x${count}`);
        count++;
    }
}

//function takes parent node as input and add O's to square selected
function addOs(ParentDiv) {
    let spanShape = ParentDiv.children;
    let count = 1;
    for (let span of spanShape) {
        console.log(span);
        span.classList.add(`data-o${count}`);
        count++;
    }
}

let frame = document.querySelector("#frame");
//this creates a listener on whole frame
frame.addEventListener("click", function () {
    let check = event.target;
    //what is return to run will depend on which player's turn it is
    //if player = 1 then the x
    return addXs(check);
    //else (player = 2) and we do o's
    return addOs(check);
});



//=============================function make it so there are two player in game======================

//we know we hit play then displays x's turn which will correspond to player 1
//player 2 = o's (simple)
//something that runs after player turn aka(display added to board) = ok the now switch to player 2
//repeat aka put piece on board ok now other players turn (this continues till gameover = true)

// so is this more of a simple variable or does this inded require a function//
// thinking really just a varible
let player = 1 //will be default then 2then back to 1 and so forth
//we always start with player as = 1
// also :
let gameOver = false//once wining params are met it triggers change to true 
// and everything gets 'disabled' 
// -cant add anymore to the board
// -who's turn it is will not change
// ect....
//=============================inintiation of the game & a reset of the game======================
//----the only thing that can be done is hit the playagain button bellow the board
//-that will reset everything back to defualt values (player, gameover, ect.. and remove add previously added classes style ect...)

