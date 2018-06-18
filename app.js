
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
var blue = 'url("images/blue_glove.png")';
var red = 'url("images/red_glove.png")';
var currentPlayer = blue;
var countBlueWins = 0;
var countRedWins = 0;
var blueScore = document.querySelector('.blueScore');
var redScore = document.querySelector('.redScore');
var moves = 0;
var jab = new Audio("sounds/Jab_sound.wav");
var hook = new Audio("sounds/Left_Hook_sound.wav");
var bell = new Audio("sounds/Boxing_arena_sound.wav");
var crowd = new Audio("sounds/crowd.mp3");
var delay = setTimeout( clearBoard, 3000 );

function hideGrid() {
   document.querySelector('.grid').style.display = 'none';
}
hideGrid();

function startGame() {
  //Get rid of the button
  document.querySelector('#startbutton').style.display = 'none';
  // bring the grid back
  document.querySelector('.grid').style.display = '';
  // insert scoring
  document.getElementById('blueGlove').innerHTML = 'Blue Boxer Score ';
  document.querySelector('.blueScore').innerHTML = 0;
  document.getElementById('redGlove').innerHTML = 'Red Boxer Score ';
  document.querySelector('.redScore').innerHTML = 0;
  bell.play()
  bell.currentTime = 0;
  crowd.play()
  crowd.currentTime = 0;
}

var clearBoard = function(elem) {
  allDivs.forEach(function(elem) {
    elem.style.backgroundImage = '';
    moves = 0;
    document.getElementById('message').innerHTML = ' ';
    //div.classList.remove('tada');
  });
}

var gamePlay  = function(event) {
  if (currentPlayer === blue) {
    // set box to cross
    event.target.style.backgroundImage = blue
    jab.play();
    jab.currentTime = 0;
    moves++
    // set currentPlayer to nought
    currentPlayer = red
  } else {
    // set box to nought
    event.target.style.backgroundImage = red
    hook.play();
    hook.currentTime = 0;
    moves++
    // set currentPlayer to cross
    currentPlayer = blue
  }

  // check for wins - check diagonal, horizontal rows, vertical colums
  //winning combos are 0 1 2, 3 4 5, 6 7 8, 0 3 6, 1 4 7, 2 5 8, 0 4 8, 2 4 6
  var checkForWin = function() {

    if (allDivs[0].style.backgroundImage === blue && allDivs[1].style.backgroundImage === blue && allDivs[2].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[3].style.backgroundImage === blue && allDivs[4].style.backgroundImage === blue && allDivs[5].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[6].style.backgroundImage === blue && allDivs[7].style.backgroundImage === blue && allDivs[8].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[0].style.backgroundImage === blue && allDivs[3].style.backgroundImage === blue && allDivs[6].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[1].style.backgroundImage === blue && allDivs[4].style.backgroundImage === blue && allDivs[7].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[2].style.backgroundImage === blue && allDivs[5].style.backgroundImage === blue && allDivs[8].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[0].style.backgroundImage === blue && allDivs[4].style.backgroundImage === blue && allDivs[8].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Blue Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }
    if (allDivs[2].style.backgroundImage === blue && allDivs[4].style.backgroundImage === blue && allDivs[6].style.backgroundImage === blue) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countBlueWins = countBlueWins + 1
        document.querySelector('.blueScore').innerHTML = Number(countBlueWins)
    }

    if (allDivs[0].style.backgroundImage === red && allDivs[1].style.backgroundImage === red && allDivs[2].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[3].style.backgroundImage === red && allDivs[4].style.backgroundImage === red && allDivs[5].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[6].style.backgroundImage === red && allDivs[7].style.backgroundImage === red && allDivs[8].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[0].style.backgroundImage === red && allDivs[3].style.backgroundImage === red && allDivs[6].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[1].style.backgroundImage === red && allDivs[4].style.backgroundImage === red && allDivs[7].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[2].style.backgroundImage === red && allDivs[5].style.backgroundImage === red && allDivs[8].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[0].style.backgroundImage === red && allDivs[4].style.backgroundImage === red && allDivs[8].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
    }
    if (allDivs[2].style.backgroundImage === red && allDivs[4].style.backgroundImage === red && allDivs[6].style.backgroundImage === red) {
      document.getElementById('message').innerHTML = '<p>Red Boxer Wins!</p>';
        crowd.play()
        crowd.currentTime = 0;
        delay = setTimeout( clearBoard, 3000 );

        countRedWins = countRedWins + 1
        document.querySelector('.redScore').innerHTML  = Number(countRedWins)
      }
    }
    checkForWin();

if (moves === 9 && !countRedWins && !countBlueWins ) {
  document.getElementById('message').innerHTML = '<p>It\'s a Draw! Play Again</p>';
  delay = setTimeout( clearBoard, 3000 );
  }

console.log(moves);

}
//add click event to all cells
allDivs.forEach(function(elem) {
  elem.addEventListener('click', gamePlay);
});


  // var winningCombos = [
  //     ['TL', 'TM', 'TR'],
  //     ['ML', 'MM', 'MR'],
  //     ['BL', 'BM', 'BR'],
  //     ['TL', 'ML', 'BL'],
  //     ['TM', 'MM', 'BM'],
  //     ['TR', 'MR', 'BR'],
  //     ['TL', 'MM', 'BR'],
  //     ['TR', 'MM', 'BL'],
  //   ];
  //
