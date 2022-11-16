class Pet {
    constructor(name , age , type, bread,colour,time){
      this.name= name;
      this.age= age;
      this.type=type;
      this.bread=bread;
      this.colour=colour;
      this.lastFed = time;
    }
    feedPet(time){
      this.lastFed =time;
      return `Last feed update to: ${this.lastFed} for ${this.name}` 
    }
  }
  const Bella = new Pet("Bella",2, "Dog", "GS","B&T","08:00");
  console.log(Bella.feedPet("15:00"))
  console.log(Bella.feedPet(""))
  
  class PetMeds extends Pet {
    constructor(name , age , type, bread,colour,time,mtime){
      super(name , age , type, bread,colour,time)
    
      this.lastFed= mtime;
    }
     giveMeds(time){
      this.lastMeds =time;
      return `Last meds update to: ${this.lastMeds} for ${this.name}` 
    }
  }
  const July = new PetMeds("July",2, "Dog", "GS","B&T","08:00");
  const Barney = new Pet("Barney",4, "Dog", "cat","B&T","08:00")
  console.log(July.giveMeds("55"))
  console.log('asdas')
