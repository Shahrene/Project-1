console.log('tic tac toe');

//create grid (divs), two shapes for peices (X & O)
//perhaps use .png graphics and animate.
//add page graphics, theme, sounds, animation later.
//on first click (.addEventListener) into the grid (clickable divs in pattern of 3 x 3 squares)
//the x (font or graphic image) is put into the box (change from blank to X) (.event.target.classList.toggle?),
//second click into grid the 0 is put into box (alternate font or graphic),
//repeat until all boxes are filled with x or 0 (draw)
//or three in a row (diagonal, vertical or horizontal) of either x or 0 is achieved.
//function to check for win
//message displayed Draw or X winner or Y winner and sound
//function to reset board when won or drawn (then use .setTimeout) and add score to player/draws
//function to score wins - for player X, player O and draws. Adds point to player (X or 0) score
//if game is won otherwise adds a point to the draw score.
//button to reset scores

var allDivs = document.querySelectorAll('.grid div');
var grid = document.querySelector('.grid');
var xImage = 'url("images/black_glove.png")';
var oImage = 'url("images/red_glove.png")';
var currentPlayer = xImage;
var moves = 0;
var jab = new Audio("sounds/Jab_sound.wav");
var hook = new Audio("sounds/Left_Hook_sound.wav");
var bell = new Audio("sounds/Boxing_arena_sound.wav");


function hideGrid() {
   document.querySelector('.grid').style.display = 'none';
}
hideGrid();

function startGame() {
  //Get rid of the button
  document.querySelector('#startbutton').style.display = 'none';
  // bring the grid back
  document.querySelector('.grid').style.display = '';
  document.querySelector('.grid').style.backgroundImage = "images/boxingringabove.png"
  //document.querySelector('.gameBoard').style.border = '1px solid grey';
  bell.play()
  bell.currentTime = 0;
}

var clearBoard = function(elem) {
  allDivs.forEach(function(elem) {
    elem.style.backgroundImage = '';
    moves = 0;
  });
}

var gamePlay  = function(event) {
  if (currentPlayer === xImage) {
    // set box to cross
    event.target.style.backgroundImage = xImage
    jab.play();
    jab.currentTime = 0;
    // set currentPlayer to nought
    currentPlayer = oImage
  } else {
    // set box to nought
    event.target.style.backgroundImage = oImage
    hook.play();
    hook.currentTime = 0;
    // set currentPlayer to cross
    currentPlayer = xImage
  }

  // check for wins
  //check diagonal, horizontal rows, vertical colums
  //winning combos are 0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8, 2 4 6
  var checkForWin = function() {

    if (allDivs[0].style.backgroundImage === xImage && allDivs[1].style.backgroundImage === xImage && allDivs[2].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[3].style.backgroundImage === xImage && allDivs[4].style.backgroundImage === xImage && allDivs[5].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[6].style.backgroundImage === xImage && allDivs[7].style.backgroundImage === xImage && allDivs[8].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[0].style.backgroundImage === xImage && allDivs[3].style.backgroundImage === xImage && allDivs[6].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[1].style.backgroundImage === xImage && allDivs[4].style.backgroundImage === xImage && allDivs[7].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[2].style.backgroundImage === xImage && allDivs[5].style.backgroundImage === xImage && allDivs[8].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[0].style.backgroundImage === xImage && allDivs[4].style.backgroundImage === xImage && allDivs[8].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[2].style.backgroundImage === xImage && allDivs[4].style.backgroundImage === xImage && allDivs[6].style.backgroundImage === xImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }

    if (allDivs[0].style.backgroundImage === oImage && allDivs[1].style.backgroundImage === oImage && allDivs[2].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[3].style.backgroundImage === oImage && allDivs[4].style.backgroundImage === oImage && allDivs[5].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[6].style.backgroundImage === oImage && allDivs[7].style.backgroundImage === oImage && allDivs[8].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[0].style.backgroundImage === oImage && allDivs[3].style.backgroundImage === oImage && allDivs[6].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[1].style.backgroundImage === oImage && allDivs[4].style.backgroundImage === oImage && allDivs[7].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[2].style.backgroundImage === oImage && allDivs[5].style.backgroundImage === oImage && allDivs[8].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[0].style.backgroundImage === oImage && allDivs[4].style.backgroundImage === oImage && allDivs[8].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    if (allDivs[2].style.backgroundImage === oImage && allDivs[4].style.backgroundImage === oImage && allDivs[6].style.backgroundImage === oImage) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
      clearBoard();
    }
    }
    checkForWin();

moves++

if (moves === 9) {
  document.getElementById('message').innerHTML = '<p>It\'s a Draw! Play Again</p>';
  clearBoard();
  }
console.log(moves);

}

allDivs.forEach(function(elem) {
  elem.addEventListener('click', gamePlay);
});


//   var winningCombos = [
//     "0, 1, 2",
//     "3, 4, 5",
//     "6, 7, 8",
//     "0, 3, 6",
//     "1, 4, 7",
//     "2, 5, 8",
//     "0, 4, 8",
//     "2, 4, 6",
//];

// var xWinArray = function(winningCombos, xImage) {
//   var xWinscombo = [];
//   allDivs.forEach(function(elem) {
//     document.style.backgroundImage === xImage
//      xWinscombo.push();
//   });
// });
// return xWinscombo;

// var oWinArray = function(winningCombos, oImage) {
//   var oWinscombo = [];
//   allDivs.forEach(function(elem) {
//     document.style.backgroundImage === oImage
//      oWinscombo.push();
//   });
// });
// return oWinscombo;

//   var fullGrid = get0Count() + getXCount()
//   var draw = (fullGrid === 9) && (!crossWins) && (!noughtWins)
//
//   if (xWins) {
//     console.log('Player X Wins')
//   }
//   if (oWins) {
//     console.log('Player 0 Wins')
//   }
//   if (draw) {
//     console.log('Its a Draw')
//   }
// }
// checkForWin();

//allDivs if ximage appears in one of the combos = xWins
// loop to check if any combo in array has been completed with one of the two images
// return alert that variable as winner
// else 9 moves are made and no winner equals draw
// return draw alert
