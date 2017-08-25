# Taylor's Game
The name of the game is "Taylor's Game," and it is a puzzle. Sometimes this puzzle will require some educated guessing!

[Play the game](https://taydejesus.github.io/gameLab/)

### Instructions:
Numbers labeling each row and column let the user know how many bad tiles are in that row or column. 

Click all the good tiles to win! 

Right clicking allows you to flag a tile. Flags prevent accidental clicks on known bad tiles.

### Future features:
- Add 'x' or image to mark the 'bad' block the user clicked, since people with a certain colorblindness cannot see the difference between the red and green block colors.
- Add a button to redirect back to the start page between games sessions

### Known Bugs:
None! Please report bugs to taydejesus21@gmail.com

### Technologies Used:
- HTML5
- JQuery

### The Process:
- [Wireframe](https://wireframe.cc/hjBf5p)
- [Trello](https://trello.com/b/FuD0YFTC/gamelab)

At the beginning I created a wireframe of the basic layout of the game page. The game simply would feature a simple header and the game board. This layout is used during gameplay, but I later added a start screen that includes instructions and allows a user to input their own grid dimensions.

The file system for the javascript is split into a few files. StartPage.js includes methods to print the start page to the screen and take in the user input. App.js contains the functionality to start and end a game, as well as display messages to tell the user if they won or lost. GameSession contains the logic of the game itself. It draws the game board to the screen, creates the grid system, and allows the user to interact with the board. The grid uses tile objects, as seen in Tile.js. This file only contains the structure of the Tile object.

The most difficult thing for me was creating the grid. Although it is a simple matrix, I was worried about having so many divs involved. Even after completion, I ended up finding some bugs when the grid is not a square shape (more rows or columns). This was due to a few issues regarding the rows and column variables being switched in such a way that the game still functioned properly in a square matrix, but broke otherwise.

### Biggest wins and challenges:
My biggest win was separating my JS files. Once that was done, it was easier to deal with bugs. In the future I will remember to spend more time on the design phase.
