# Tic Tac Toe

### Play the game here:

## Instructions

A simple game of strategy: two players X and O, who take turns clicking the spaces in a 3×3 grid.
The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

## Approach

I created the div grid and made these clickable. Then wrote a function with an event listener which would 
alternatively populate the x image and o image into the div cell upon each click. 
I then added a function to check for wins, shows a winning message and in turn clears the board for the next game.
I added a clear board function then some functions to hide the grid, show a start button and then hide the button and 
show the grid.

## Tech Used

I added animations to the grid and the cell borders which play when the 'Game On!!' button is clicked. 
I have two different sounds playing on alternate clicks of the div cells.
I used some CSS styling on the divs to make appear as though they 'pop up' on hover and a media query so someone on a 
smaller device can see the board properly.

## Next Steps

Make code DRY-er!
Include a tally of scores for each player.
More styling or a theme - its a bit boring at present.
