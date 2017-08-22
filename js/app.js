App = (function(){
  return {
    numberOfRows: 5,
    numberOfColumns: 5,
    gameGrid: [],
    gameRows: [],
    gameColumns: [],
    risk: 0.4,
    tilesToClick: 0,

    initRowsCols: function(columns, rows){
      //initialize columns and rows arrays
      for (var i=0; i<rows;i++){
        this.gameRows.push(0);
      }
      for (var i=0; i<columns;i++){
        this.gameColumns.push(0);
      }
    },

    generateTile: function(){
      var randomNum = Math.random();
      if (randomNum < this.risk){
        return 1;
      } else {
        return 0;
      }
    },

    populateGameGrid: function(columns, rows) {
      for (var i=0; i<rows; i++){
        this.gameGrid.push([]);
        for (var j=0; j<columns; j++){

          var tile = this.generateTile();
          this.gameGrid[i][j] = tile;
          if (tile) {
            this.gameRows[j]++;
            this.gameColumns[i]++;
          } else {
            this.tilesToClick++;
          }
        }
      }
    },

    isRowHeader: function(col_num) {
      return col_num == -1
    },

    isColHeader: function(row_num) {
      return row_num == -1
    },

     createRowHeaderItems: function(col_num, rowDiv) {
      return (col_num === -1)
        ? rowDiv.append($('<div>').addClass('col header item'))
        : rowDiv.append($('<div>').addClass('col header item').text(`${this.gameRows[col_num ] }`))
    },

    createColHeaderItems: function(row_num, rowDiv) {
      return rowDiv.append($('<div>').addClass('col header item').text(`${this.gameColumns[row_num]}`));
    },

    createGridItems: function(row_num, col_num, rowDiv) {
      var tile = $('<div>').addClass('col item').attr('oncontextmenu', 'return false');
      this.addClick(tile, row_num, col_num ) ;
      rowDiv.append(tile);
    },

    printBoard: function(columns, rows){
      for (var row_num = -1; row_num < rows; row_num++){
        var rowDiv = $('<div>').addClass('row');

        for (var col_num = -1; col_num < columns; col_num++){
          if(this.isRowHeader(row_num)) {
            this.createRowHeaderItems(col_num, rowDiv)
          } else if (this.isColHeader(col_num)) {
            this.createColHeaderItems(row_num, rowDiv)
          } else {
            this.createGridItems(row_num, col_num, rowDiv)
          }
        }

        $('#gameBoard').append(rowDiv);
      }
    },

    winner: function(){
      console.log('here')
      var text = $('<h2>').text('You won!').addClass('winner message');
      var messageContainer = $('<div>').addClass('message-container');
      messageContainer.append(text).append(this.createResetButton());
      $('#gameBoard').append(messageContainer);
    },

    loser: function(){
      var text = $('<h2>').text('You lose...').addClass('loser message');
      var messageContainer = $('<div>').addClass('message-container');
      messageContainer.append(text).append(this.createResetButton());
      $('#gameBoard').append(messageContainer);
    },

    checkIfWon: function() {
      if (!this.tilesToClick){
        this.winner();
      }
    },

    createResetButton: function(){
      var button = $('<button>').addClass('startButton playAgain').text('Play Again');
      button.on('click', ()=>this.setup(this.numberOfRows, this.numberOfColumns));
      return button
    },

    clickBox: function(tile, row, column) {
      tile.on('click', () => {
        if (this.gameGrid[row][column]){
          //you lose
          tile.css('background-color', '#f69c9c');
          this.loser();
        } else {
          this.tilesToClick--;
          tile.css('background-color', '#A9CBB7');
          this.checkIfWon();
        }
      });
    },

    makeUnclickable: function(item){
      item.addClass('unclickable');
    },

    markMine: function(tile){
      if (tile.hasClass('unclickable')){
        tile.removeClass('unclickable');
        tile.empty();
      } else {
        //mark not a mine
        tile.css('background-color', '#fff');
        var flagImage = $('<img>').attr('src', 'images/flag.png').attr('alt', 'flag icon').addClass('flag');
        tile.append(flagImage);
        App.makeUnclickable(tile);
      }
    },

    addClick: function(tile, row, column){
      tile.mousedown(function(e){
        e.preventDefault();
        if (e.which == 1 && !tile.hasClass('unclickable')) {
          App.clickBox(tile, row, column);
        } else if (e.which == 3) {
          App.markMine(tile);
        }
      });
    },

    setup: function(columns, rows) {
      this.gameRows = [];
      this.gameColumns = [];
      this.tilesToClick = 0;
      $('.container').empty();
      this.initRowsCols(columns, rows);
      this.populateGameGrid(columns, rows);
      this.printBoard(columns, rows);
    }

  }
})();
