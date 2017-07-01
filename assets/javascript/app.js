
  var game1 = new Crystal();

  game1.addValues();


  function Crystal (){
    this.crystals =  ["red","blue","black","green"];
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    this.counter = 0;
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
    };

  }
