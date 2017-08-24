App = (function(){
  var clappingSound = new Audio('./sounds/clapping.wav');
  return {
    startGame: function(rows, cols){
      if (!rows || !cols || rows<=0 || cols<=0){
        rows = 5;
        cols = 5;
      }
      GameSession.numberOfRows = rows;
      GameSession.numberOfColumns = cols;
      GameSession.inSession = true;
      GameSession.setup(cols, rows);
    },

    endGame: function(textNode){
      GameSession.inSession = false;
      var messageContainer = $('<div>').addClass('message-container');
      messageContainer.append(textNode).append(this.createResetButton());
      $('#gameBoard').append(messageContainer);
    },

    //display win message
    winner: function(){
      clappingSound.play();
      var text = $('<h2>').text('You won!').addClass('winner message');
      this.endGame(text);
    },

    //display lose message
    loser: function(){
      var text = $('<h2>').text('You lose...').addClass('loser message');
      this.endGame(text);
    },

    checkIfWon: function() {
      if (!this.tilesToClick){
        this.winner();
      }
    },

    /*
     * @return {JQuery Object} button that creates new game sesion on click
     */
    createResetButton: function(){
      var button = $('<button>').addClass('startButton playAgain').text('Play Again');
      button.on('click', ()=>{
        GameSession.setup(GameSession.numberOfColumns, GameSession.numberOfRows);
        clappingSound.pause();
      });
      return button
    }
  }
})();
