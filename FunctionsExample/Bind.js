console.log("=======================example1===============");
var pokemon = {
  firstname: "Pika",
  lastname: "Chu ",
  getPokeName: function () {
    var fullname = this.firstname + " " + this.lastname;
    return fullname;
  },
};

var pokemonName = function (secondName) {
  console.log(this.getPokeName() + "I choose you!");
  console.log("Name:", this.firstname, this.lastname);
  console.log(this.getPokeName() + "I choose you!", secondName);
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon("TestName");
console.log("=======================example12==============");
let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};
let run = runner.run.bind(flyer, 20);
console.log("run", run);
console.log(run());
