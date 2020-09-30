console.log("<===== Cloures =====> \n");

var createPet = function (name) {
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
            if (typeof newSex === 'string' && (newSex.toLowerCase() === 'male' ||
                newSex.toLowerCase() === 'female')) {
                sex = newSex;
            }
        }
    }
}

var pet = createPet('Sadaqat');
console.log(pet);

pet.getName();
console.log(pet.getName());

pet.setName('Kaleem');
pet.setSex('Male');
pet.getSex();
pet.getName();

console.log(pet.getName());
console.log(pet.getSex());