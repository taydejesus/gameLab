$(function(){
  var gameGrid = [];
  var gameRows = [];
  var gameColumns = [];
  var risk = 0.4;

  setup(5,5);






// functions :)


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

        var tile = generateTile();
        gameGrid[i][j] = tile;
        if (tile) {
          gameRows[j]++;
          gameColumns[i]++;
        }
      }
    }
  }

  function generateTile(){
    var randomNum = Math.random();
    if (randomNum < risk){
      return 1;
    } else {
      return 0;
    }
  }

  function printBoard(columns, rows){
    for (var row_num = -1; row_num < rows; row_num++){
      var rowDiv = $('<div>').addClass('row');

      for (var col_num = -1; col_num < columns; col_num++){
        if(isRowHeader(row_num)) {
          createRowHeaderItems(col_num, rowDiv)
        } else if (isColHeader(col_num)) {
          createColHeaderItems(row_num, rowDiv)
        } else {
          createGridItems(row_num, col_num, rowDiv)
        }
      }

      $('#gameBoard').append(rowDiv);
    }
  }

  function isRowHeader(col_num) {
    return col_num == -1
  }

  function isColHeader(row_num) {
    return row_num == -1
  }

  function createRowHeaderItems(col_num, rowDiv) {
    return (col_num === -1)
      ? rowDiv.append($('<div>').addClass('col').addClass('header').text(` `))
      : rowDiv.append($('<div>').addClass('col').addClass('header').text(`${gameRows[col_num ] }`))
  }

  function createColHeaderItems(row_num, rowDiv) {
    return rowDiv.append($('<div>').addClass('col').addClass('header').text(`${gameColumns[row_num]}`));
  }

  function createGridItems(row_num, col_num, rowDiv) {
    var tile = $('<div>').addClass('col').text(`row_num, ${row_num} and col_num ,  ${col_num } `);
    addClick(tile, row_num, col_num ) ;
    rowDiv.append(tile);
  }

  function addClick(tile, row, column){
    tile.on('click', () => {
      console.log('row', row)
      console.log('col', column);
      if (gameGrid[row][column]){
        //you lose
        alert("you lose");
      } else {
        tile.css('background-color', 'green');
      }
    });
  }

  function addClickUp(y, x) {
    console.log(x + y, 'heyyyy');
    return y + x;
  }

  window.addClickUp = addClickUp;
})
