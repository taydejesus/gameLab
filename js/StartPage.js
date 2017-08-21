StartPage = (function(){
  return {
    createStartButton: function(){
      var startButton = $('<button>').attr('type', 'submit').addClass('startButton');
      //start game on click
      startButton.on('click', ()=>App.setup(App.numberOfRows, App.numberOfColumns));
      $('.container').append(startButton);
    },
    setup: function(){
      this.createStartButton();
      //print instructions h3
      //print instructions
    }
  }
})();
