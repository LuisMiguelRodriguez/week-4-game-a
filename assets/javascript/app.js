
  var game1 = new Crystal();

  game1.addValues();

  // Previous Logic would not grab the new data attribute after
  // re rerunning addValues even the dom
  // updates and the values can be seen.
  //
  // $('#red').on("click", function() {
  //   //lets grab the data from gem
  //   var value = $('#red').data("value");
  //   console.log(value);
  //   //will need to add that value to pointsToMatch
  //   game1.points += value;
  //   console.log(game1.points);
  //   $('#points').html(game1.points);
  //   game1.winOrLoose();
  //
  // });
  //
  // $('#blue').on("click", function() {
  //   var value = $('#blue').data("value");
  //   console.log(value);
  //   //will need to add that value to pointsToMatch
  //   game1.points += value;
  //   console.log(game1.points);
  //   $('#points').html(game1.points);
  //   game1.winOrLoose();
  // });
  //
  // $('#black').on("click", function() {
  //   var value = $('#black').data("value");
  //   console.log(value);
  //   //will need to add that value to pointsToMatch
  //   game1.points += value;
  //   console.log(game1.points);
  //   $('#points').html(game1.points);
  //   game1.winOrLoose();
  // });
  //
  // $('#green').on("click", function() {
  //   var value = $('#green').data("value");
  //   console.log(value);
  //   //will need to add that value to pointsToMatch
  //   game1.points += value;
  //   console.log(game1.points);
  //   $('#points').html(game1.points);
  //   game1.winOrLoose();
  // });

'  '


// **********************************************************************
// *****************************Functions********************************
// **********************************************************************
  //grabs data from data attribute dynamically
  function data (e){
    var value = $(e.target).attr('data-value');
    console.log(parseInt(value));
    game1.points += parseInt(value);
    console.log(game1.points);
    $('#points').html(game1.points);
    game1.winOrLoose();
  }

  function Crystal (){
    //function to pick a number from 12 - 120
    this.pointsToMatch = function(){
      return Math.floor((Math.random(12) * ( 120 - 12) + 12));
    };

    this.crystals =  ["red","blue","black","green"];
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    this.goal = 0;
    this.counter = 0;
    this.points = 0;
    this.wins = 0;
    this.losses = 0;
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
      this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
      var goal = this.pointsToMatch();
      this.goal = goal;
      $("#pointsToMatch").html(goal);
      $("#points").html(this.points);

      $("#wins").html(this.wins);
      $("#losses").html(this.losses);
    };

    this.winOrLoose = function (){
      if(this.goal === this.points) {
        alert("you win");
        this.wins++;
        $("#wins").html(this.wins);
        this.addValues();
        this.points = 0;
        $("#points").html(this.points);
      } else if ( this.points > this.goal ){
        alert("you loose");
        this.losses++;
        $("#losses").html(this.losses);
        this.addValues();
        this.points = 0;
        $("#points").html(this.points);
      }
    };

  }
