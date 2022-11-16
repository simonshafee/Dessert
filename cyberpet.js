//let's make the first programe
class pet {
    constructor(name){
        this.name = name;
        this.drinklev=10;
        this.foodlev=10;
        this.happyneslev=10;
        this.healthlev=10;
    }
    get startInfo(){
        return `Welcaome to growing pets.\n your pets info is: \n Drink Level 20.\n Food level: 20.\n Happiness Level: 20.\n Health: 20.
          try to feed it because it's very hungry(if you get 0 in each condition you gonna loooooose ;) `
    }


}

const startGame = () => {
    let whatAnimal = prompt("Choose your virtual pet type:\ndog\ncat");
    let petName = prompt("Please name your pet");
    userAnimal(whatAnimal, petName);
    playGame();
  }
  

//   const userAnimal = (whatAnimal, petName) => {
//     let newPet = new pet(petName);
//     console.log("Your " + whatAnimal +" is called " + petName + ".\n" + newPet.startInfo );
//   }
 
//   const playGame = () => {
//     let game = prompt("Play with your pet? Yes or No");
//     if (game === "Yes") {
//         feed
//     //   console.log (newPet.play(),`Happiness Level:15`)
//     //   console.log (newPet.happyneslev);
//     }

// }
//  const come = new pet( 20,20,20,20)
//   startGame()
const startGame = () => {
    let whatAnimal = prompt("Choose your virtual pet type:\ndog\ncat\nrabbit");
    let petName = prompt("Please name your pet");
    userAnimal(whatAnimal, petName);
    playGame();
  }
  
  const userAnimal = (whatAnimal, petName) => {
    let newPet = new pet(petName);
    console.log("Your " + whatAnimal +" is called " + petName + ".\n" + newPet.startInfo );
  }
  
  const playGame = () => {
    let game = prompt("Play with your pet? Yes or No");
    if (game === "Yes") {
      console.log (newPet.play())
      console.log (newPet._happiness);
    } else {
      console.log("Your pet's happiness will decrease!")
      newPet.happinessDrain();
      console.log(newPet._happiness)
    }
  }
  
  startGame()