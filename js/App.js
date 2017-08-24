App = (function(){
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

    winner: function(){
      var text = $('<h2>').text('You won!').addClass('winner message');
      this.endGame(text);
    },

    loser: function(){
      var text = $('<h2>').text('You lose...').addClass('loser message');
      this.endGame(text);
    },

    checkIfWon: function() {
      if (!this.tilesToClick){
        this.winner();
      }
    },

    createResetButton: function(){
      var button = $('<button>').addClass('startButton playAgain').text('Play Again');
      button.on('click', ()=>GameSession.setup(GameSession.numberOfColumns, GameSession.numberOfRows));
      return button
    },

  }
})();
