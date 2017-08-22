StartPage = (function(){
  return {
    createStartButton: function(){
      var startButton = $('<button>').attr('type', 'submit').addClass('startButton');
      startButton.text('Start');
      //start game on click
      startButton.on('click', ()=>App.setup(App.numberOfRows, App.numberOfColumns));
      $('.container').append(startButton);
    },
    printInstructions: function(){
      $('.container').append($('<h3>').addClass('instruction-header').text('Instructions'));
      var instructionText = "The numbers that label the rows and columns let you know how many 'bad' blocks are in that respective row or column. Click all the 'good' blocks to win!";
      $('.container').append($('<p>').addClass('instruction-text').text(instructionText));
    },
    setup: function(){
      this.createStartButton();
      this.printInstructions();
    }
  }
})();
