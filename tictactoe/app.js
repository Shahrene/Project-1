console.log('tic tac toe');

//create grid (divs), two shapes for peices (X & O or a big fat font)
//perhaps use .png graphics so these can be animated
//add page graphics, theme, sounds, animation later.

//game: two players X and O, who take turns clicking the spaces in a 3×3 grid.
//The player who succeeds in placing three of their marks in a horizontal, vertical,
//or diagonal row wins the game.

//on first click (.addEventListener) into the grid (clickable divs in pattern of 3 x 3 squares)
//the x (font or graphic image) is put into the box (change from blank to X) (.event.target.classList.toggle?),
//second click into grid the 0 is put into box (alternate font or graphic),
//repeat until all boxes are filled with x or 0 (draw)
//or three in a row (diagonal, vertical or horizontal) of either x or 0 is achieved.
//function to check for win
//message displayed Draw or X winner or Y winner (.creattextNode) and sound
//mute sounds button?
//function to reset board when won or drawn (then use .setTimeout) and add score to player/draws
//function to score wins - for player X, player O and draws. Adds point to player (X or 0) score
//if game is won otherwise adds a point to the draw score.
//button to reset scores

var allDivs = document.querySelectorAll('.grid div');
var crossImage = "url('images/cross1.png')";
var noughtImage = "url('images/nought1.png')";
var currentPlayer = crossImage;

var divImageClick  = function(event) {
  // console.log('')

  if (currentPlayer === crossImage) {
    // set box to crossImage
    event.target.style.backgroundImage = crossImage
    // set currentPlayer to noughtImage
    currentPlayer = noughtImage
  } else {
    // set box to noughtImage
    event.target.style.backgroundImage = noughtImage
    // set currentPlayer to crossImage
    currentPlayer = crossImage
  }

  // check for wins


}
allDivs.forEach(function(elem) {

  elem.addEventListener('click', divImageClick);

});
