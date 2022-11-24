/////////////INFO DISPLAY
const health =document.getElementById("health");
const hunger = document.getElementById("hunger");
const thirst = document.getElementById("thirst");
const cleanliness = document.getElementById("cleanliness");
const happiness= document.getElementById("happiness");
///////////////// BUTTONS
const feed = document.getElementById("feed");
const drink = document.getElementById("drink");
const play = document.getElementById("play");
const sleep = document.getElementById("sleep")
const image = document.getElementById("pet-img")

let pet = {
    hunger: 50,
    thirst: 50,
    happiness: 50,
    cleanliness:50,
    health:100,
    feedpet(){
    /////sub
    this.hunger -=5;
    this.cleanliness -=5;
    this.happiness -= 5;
    //sum
    this.thirst +=5;
    this.health+=10;
    },
    drinkpet(){
        ///sub
        this.thirst-=10;
        this.cleanliness-=5;
        ///sum
        this.happiness-=5;
        this.happiness-=5;
        this.health+=5;
    },
    playpet(){
        ///sum
        this.play+=10;
        this.thirst+=10;
        this.hunger+=10;
        this.happiness-=5;
        this.health-=5;
        ///sub
        this.cleanliness-=10
    },
    goSleep(){
        ///sum
        this.happiness+=10;
        this.thirst+=10;
        this.hunger+=10;
        this.cleanliness+=20
    }

}

function chechCondition(){
    if(pet.health>=100)
    pet.health = 100;
    if(pet.health<=0)
    pet.health = 0;
    if(pet.happiness>=100)
    pet.happiness = 100;
    if(pet.happiness<=0)
    pet.happiness = 0;
    if(pet.hunger>=100)
    pet.hunger= 100;
    if(pet.hunger<=0)
    pet.hunger= 0;
    if(pet.thirst<=0)
    pet.thirst= 0;
    if(pet.thirst>=100)
    pet.thirst= 100;
    if(pet.cleanliness>=100)
    pet.cleanliness= 100;
    if(pet.cleanliness<=0)
    pet.cleanliness= 0;
    if(pet.hunger<=20)
    image.src = "./soniceat1.gif"
    if(pet.health<=40)
    image.src = "./sonichealth.gif"
    if(pet.health===100&&pet.hunger===100&&pet.cleanliness===100&&pet.thirst===100&&pet.hunger===100)
    image.src = "./sonic.gif"
    
}



function infoRender(){
    health.textContent = `health: ${pet.health}`;
    hunger.textContent = `hunger ${pet.hunger}`
    thirst.textContent = `thirst: ${pet.thirst}`;
    happiness.textContent = `happiness: ${pet.happiness}`;
    cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
}

feed.addEventListener("click", () => {
    pet.feedpet();
    chechCondition();
    infoRender();
});
drink.addEventListener("click", () => {
    pet.drinkpet();
    chechCondition();
    infoRender();
});

play.addEventListener("click",()=>{
    pet.playpet();
    chechCondition();
    infoRender();

});
sleep.addEventListener("click",()=>{
    pet.goSleep();
    chechCondition();
    infoRender();
})


infoRender();