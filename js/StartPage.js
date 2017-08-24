StartPage = (function(){
  return {
    //display input fields for columns and rows
    createInput: function(){
      $('.container').append($('<p>').text('Optional: input number of rows and columns'));
      var form = $('<form>');
      var rows = $('<input>').attr('type', 'number').addClass('row-input');
      var cols = $('<input>').attr('type', 'number').addClass('col-input');

      form.append("Rows: ").append(rows);
      form.append("<br>Columns: ").append(cols);
      $('.container').append(form);
    },

    validInput: function(){
      return (($('.row-input').val() < 11 && $('.row-input').val() > 2) || ($('.row-input').val() == "")) &&
      (($('.col-input').val() < 11 && $('.col-input').val() > 2) || ($('.col-input').val() == ""));

    },

    createStartButton: function(){
      var startButton = $('<button>').attr('type', 'submit').addClass('startButton');
      startButton.text('Start');
      //start game on click
      startButton.on('click', ()=>{
        if (this.validInput()){
          App.startGame($('.row-input').val(), $('.col-input').val());
        } else {
          alert("Column and row values must be between 3 and 10");
        }
    });
      $('.container').append(startButton);
    },


    printInstructions: function(){
      $('.container').append($('<h3>').addClass('instruction-header').text('Instructions'));
      var instructionText = "The numbers that label the rows and columns let you know how many 'bad' blocks are in that respective row or column. Click all the 'good' blocks to win! Right-click to flag a block.";
      $('.container').append($('<p>').addClass('instruction-text').text(instructionText));
    },

    setup: function(){
      this.createInput();
      this.createStartButton();
      this.printInstructions();
    }
  }
})();
