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
          gameRows[i]++;
          gameColumns[j]++;
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
    for (var i=-1; i<rows; i++){
      var rowDiv = $('<div>').addClass('row');

      for (var j=-1; j<columns; j++){
        // row headers
        if(i==-1){
          if (j==-1){
            //blank corner div
            rowDiv.append($('<div>').addClass('col').addClass('header').text(` `));
          } else {
            rowDiv.append($('<div>').addClass('col').addClass('header').text(`${gameRows[j]}`));
          }
        } else if (j==-1) {
          //print column headers
          rowDiv.append($('<div>').addClass('col').addClass('header').text(`${gameColumns[i]}`));
        } else {
          //regular grid printing
          var tile =$('<div>').addClass('col').text(`i, ${i} and j, ${j}`);
          addClick(tile, i, j);
          rowDiv.append(tile);
        }
      }
      $('#gameBoard').append(rowDiv);
    }
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



})
