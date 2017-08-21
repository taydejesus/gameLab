$(function(){
  var gameGrid = [];
  var gameRows = [];
  var gameColumns = [];
  var risk = 0.3;
  setup(3,3);

  function setup(columns, rows) {
    initRowsCols(columns, rows);
    populateGameGrid(columns, rows);
    printBoard(columns, rows);
  }

  function initRowsCols(columns, rows){
    //initialize columns and rows arrays
    for (var i=0; i<rows;i++){
      gameRows.push(0);
    }
    for (var i=0; i<columns;i++){
      gameColumns.push(0);
    }
  }

  function populateGameGrid(columns, rows) {
    for (var i=0; i<rows; i++){
      gameGrid.push([]);
      for (var j=0; j<columns; j++){
        var tile = 1;
        gameGrid[i][j] = tile;
        if (tile) {
          gameRows[i]++;
          gameColumns[j]++;
        }
      }
    }
  }

  function printBoard(columns, rows){
    //prints gameBoard
    for (var i=0; i<rows; i++){
      var rowDiv = $('<div>').addClass('row');

      for (var j=0; j<columns; j++){
        rowDiv.append($('<div>').addClass('col').text(`i, ${i} and j, ${j}`));

      }
      $('#gameBoard').append(rowDiv);
    }

  }

})
