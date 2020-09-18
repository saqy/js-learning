console.log("================exmaple1==============");
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41
console.log(a);
console.log(b);
console.log(c);
console.log("================exmaple2==============");
var createPet = function (name) {
  console.log("Test arguments;", arguments);
  var sex;

  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

var pet = createPet("Vivie");
console.log(pet.getName());
pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
console.log(pet.getName());
