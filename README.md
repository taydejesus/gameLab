# gameLab


### Technologies Used:
- HTML5
- JQuery

### The Process:
Wireframe: https://wireframe.cc/hjBf5p

### Future features:
- Add 'x' or image to mark the 'bad' block the user clicked, since people with a certain colorblindness cannot see the difference between the red and green block colors.
- Add a button to redirect back to the start page between games sessions

### Known Bugs:
None! Please report bugs!

### Biggest wins and challenges:
My biggest win was separating my JS files. Once that occured, it was easier to deal with bugs.

### The game you chose:
The name of the game is "Taylor's Game," and it is a puzzle. Sometimes this puzzle will require some educated guessing!

### The rules of the game:
Numbers labeling the rows and columns let the user know how many bad tiles are in that row or column. Click all the good tiles to win! Right clicking allows you to flag a tile. Flags prevent accidental clicks on known bad tiles.

### Your process for turning that game into a web application (wireframes, blockers/issues that popped up):

The most difficult thing for me was creating the grid. Although it is a simple matrix, I was very worried about having so many divs involved. Even after completion, I ended up finding some bugs when the grid is not a square shape (more rows or columns). This was due to a few issues regarding the rows and column variables being switched in such a way that the game still functioned properly in a square matrix.

A big problem I had was that I started coding too quickly. I should have spent more time in the design phase, but felt pressured by time. Because of this I had to go back later and refactor my code. I ended up drawing my UML diagram after the game was already functioning. 
