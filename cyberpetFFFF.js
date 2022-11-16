class Pet {
    constructor(name) {
        this.name = name;
        this.drinkLevel = 10;
        this.foodLevel = 10;
        this.happiness = 10;
        this.health = 10;
        
    }
    get addDrink () {
        return `Drink Level:${this.drinkLevel+=5} `;
    }
    get addfood() {
        return `Food Level:${this.foodLevel+=5}`
    }
    get addfood() {
        return `Food Level:${this.foodLevel+=5}`
    }
    get play() {
        return `happiness:${this.happiness+=5}`
    }
    get sleep() {
        return `health Level:${this.health+=5}`
    }
    
}

const dog = new Pet("dog");
const cat = new Pet("cat");
console.log(dog.addfood);
console.log(dog.addfood);
console.log(dog.addfood);
console.log(dog.addDrink)
console.log(dog.addDrink)
console.log(dog);
console.log(cat.addfood)
console.log(cat.addfood)
console.log(cat.addfood)
console.log(cat)