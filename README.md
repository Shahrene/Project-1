# Tic Tac Toe

### Play the game here: https://shahrene.github.io/Tic-Tac-Toe-to-Toe/

## Instructions

A boxing themed Tic Tac Toe styled game. Two boxers, red glove and blue glove take turns to throw hooks and jabs, ie. clicking the cells in a 3×3 grid. The boxer who succeeds in placing three of their coloured glove in a horizontal, vertical, or diagonal row wins the game.

## Approach

I created the div grid and made these clickable. Then wrote a function with an event listener which would
alternatively populate the blue glove and red glove into the div cell upon each click.
I then added a function to check for wins, shows a winning message and in turn clears the board for the next game.
I added a clear board function then some functions to hide the grid, show a start button and then hide the button and
show the grid.

## Tech Used

I added animations to the grid which play when the button on the first page is clicked and I used some CSS styling on the divs to make appear as though they 'pop up' on hover.
I have two different sounds playing on alternate clicks of the div cells.
I have made the board as responsive as possible but would like to add media queries so the game will look good on a smaller device.


## Next Steps

Make code DRY-er!
Include a tally of scores for each player.
