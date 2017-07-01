
  var game1 = new Crystal();

  game1.addValues();
  console.log(game1.pointsToMatch());

  $('#red').on("click", function() {
    //lets grab the data from gem
    var value = $('#red').data("value");
    console.log(value);
    //will need to add that value to pointsToMatch
    game1.points += value;
    console.log(game1.points);
    $('#points').html(game1.points);

  });

  $('#blue').on("click", function() {
    var value = $('#blue').data("value");
    console.log(value);
    //will need to add that value to pointsToMatch
    game1.points += value;
    console.log(game1.points);
    $('#points').html(game1.points);
  });

  $('#black').on("click", function() {
    var value = $('#black').data("value");
    console.log(value);
    //will need to add that value to pointsToMatch
    game1.points += value;
    console.log(game1.points);
    $('#points').html(game1.points);
  });

  $('#green').on("click", function() {
    var value = $('#green').data("value");
    console.log(value);
    //will need to add that value to pointsToMatch
    game1.points += value;
    console.log(game1.points);
    $('#points').html(game1.points);
  });



// **********************************************************************
// *****************************Functions********************************
// **********************************************************************


  function Crystal (){
    //function to pick a number from 12 - 120
    this.pointsToMatch = function(){
      return Math.floor((Math.random(12) * ( 120 - 12) + 12));
    };

    this.crystals =  ["red","blue","black","green"];
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    this.counter = 0;
    this.points = 0;
    this.randomNumber = function (){
      return this.numbers[Math.floor((Math.random() * this.numbers.length))];
    };

    this.addValues = function(){
      for (var i = 0; i < this.crystals.length; i++){
        var value = this.randomNumber();
        console.log(value);
        $('#'+ this.crystals[i]).attr("data-value", value);

        var index = this.numbers.indexOf(value);
        console.log(index);
        this.numbers.splice(index , 1);
        console.log(this.numbers);
      }

      $("#pointsToMatch").html(this.pointsToMatch());
      $("#points").html(this.points);
    };

  }
