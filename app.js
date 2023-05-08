//same keys nad values
function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }


  //answer es2015
  function createInstructor(firstName, lastName){
    return {
      firstName, lastName
    }
  }




  //computed property names
  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"


//answer es2015
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt",
   [favoriteNumber]: "That is my favorite!"


}






//object methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }



  //answer ES2015
  var instructor = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }





  //createAnimal function
  const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"





//answer 
function createAnimal(species, verb, noise) {
   return {
    species, 
    [verb](){
        return noise;
    }
   }
}
