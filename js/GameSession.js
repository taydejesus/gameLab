GameSession = (function(){
  return {
    risk: 0.4, //chance that a tile will have a bomb
    numberOfRows: 5,
    numberOfColumns: 5,
    gameGrid: [],
    gameRows: [], //stores row headers
    gameColumns: [], //stores column headers
    tilesToClick: 0, //number of tiles left to win
    inSession: false, //a game is being played

    initRowsCols: function(columns, rows){
      this.gameRows = [];
      this.gameColumns = [];
      //initialize columns and rows arrays
      for (var i=0; i<rows;i++){
        this.gameRows.push(0);
      }
      for (var i=0; i<columns;i++){
        this.gameColumns.push(0);
      }
    },

    /*
     * @return {Tile} grid item
     */
    generateTile: function(){
      var tile = new Tile;
      var randomNum = Math.random();
      if (randomNum < this.risk) {
        tile.hasBomb = true;;
      }
      return tile;
    },

    /*
     * determines whether or not tile has a bomb and
     * updates headers to match number of bombs
     * @param {rows} Row number
     * @param {columns} Column number
     */
    populateGameGrid: function(columns, rows) {
      for (var row_num=0; row_num<rows; row_num++) {
        this.gameGrid.push([]);
        for (var col_num=0; col_num<columns; col_num++) {
          var tile = this.generateTile();
          this.gameGrid[row_num][col_num] = tile;
          if (tile.hasBomb) {
            this.gameRows[row_num]++;
            this.gameColumns[col_num]++;
          } else {
            this.tilesToClick++;
          }
        }
      }
    },

    isRowHeader: function(col_num) {
      return col_num == -1;
    },

    isColHeader: function(row_num) {
      return row_num == -1;
    },

    /*
     * @return {JQuery Object} row header tiles OR blank tile for top left corner
     */
     createRowHeaderItems: function(col_num, row_num, rowDiv) {
      return (col_num == -1 && row_num == -1) //checks if blank corner header gridItem
        ? rowDiv.append($('<div>').addClass('col header item'))
        : rowDiv.append($('<div>').addClass('col header item').text(`${this.gameRows[row_num]}`));
    },

    /*
     * @return {JQuery Object} column header
     */
    createColHeaderItems: function(col_num, row_num, rowDiv) {
      return rowDiv.append($('<div>').addClass('col header item').text(`${this.gameColumns[col_num]}`));
    },

    createGridItems: function(row_num, col_num, rowDiv) {
      var tile = $('<div>').addClass('col item').attr('oncontextmenu', 'return false');
      this.addClick(tile, row_num, col_num);
      rowDiv.append(tile);
    },

    /*
     * Print out the game grid
     * @param {rows} Row number
     * @param {columns} Column number
     */
    printBoard: function(columns, rows){
      for (var row_num = -1; row_num < rows; row_num++){
        //create new row
        var rowDiv = $('<div>').addClass('row');

        //for each column, print either header or tile
        for (var col_num = -1; col_num < columns; col_num++){
          if(this.isRowHeader(col_num)) {
            this.createRowHeaderItems(col_num, row_num, rowDiv)
          } else if (this.isColHeader(row_num)) {
            this.createColHeaderItems(col_num, row_num, rowDiv)
          } else {
            this.createGridItems(row_num, col_num, rowDiv)
          }
        }

        $('#gameBoard').append(rowDiv);
      }
    },


    /*
     * ends game if tile has a bomb or turns it green if not
     * executes on click of tile
     * @param {tile} Tile
     * @param {row} Row number
     * @param {columns} Column number
     */
    clickBox: function(tile, row, column) {
      tile.on('click', () => {
        if (this.gameGrid[row][column].hasBomb){
          //you lose
          tile.css('background-color', '#f69c9c');
          App.loser();
        } else if (!tile.clicked){
          this.tilesToClick--;
          tile.css('background-color', '#A9CBB7');
          this.checkIfWon();
        }
        tile.clicked = true;
      });
    },

    /*
     * flag or unflag a tile
     * @param {tile} Tile
     */
    markMine: function(tile){
      if (tile.isFlagged){ //if already flagged, unflag it
        tile.isFlagged = false;
        tile.empty();
      } else {
        //mark with flag
        tile.isFlagged = true;
        tile.css('background-color', '#fff');
        var flagImage = $('<img>').attr('src', 'images/flag.png').attr('alt', 'flag icon').addClass('flag');
        tile.append(flagImage);
      }
    },


    /*
     * add click listeners to tiles
     * @param {tile} Tile
     * @param {row} Row number
     * @param {columns} Column number
     */
    addClick: function(tile, row, column){
      tile.mousedown(function(e){
        e.preventDefault();
        if (GameSession.inSession){
          if (e.which == 1 && !tile.isFlagged) {
            GameSession.clickBox(tile, row, column);
          } else if (e.which == 3 && !tile.clicked) {
            GameSession.markMine(tile);
          }
        }
      });
    },

    checkIfWon: function() {
      if (!this.tilesToClick){
        App.winner();
      }
    },

    /*
     * @param {columns} number of columns
     * @param {rows} number of rows
     */
    setup: function(columns, rows) {
      this.inSession = true;
      this.tilesToClick = 0;
      $('.container').empty();
      this.initRowsCols(columns, rows);
      this.populateGameGrid(columns, rows);
      this.printBoard(columns, rows);
      this.checkIfWon();
    }
  }
})();
