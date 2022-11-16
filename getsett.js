class pet {
    constructor(firstName,lastName,age,type,time){
    this.firstName=firstName;
    this.lastName=lastName;
    this.age=age;
    this.type=type;
    this.lastfed=time
  
  }
  get petInfo(){
    return `${this.name} is a ${this.type}, ${this.age} years old`;
  }
  set fullName(name){
    const array = name.split(' ');
    this.firstName= array[0];
    this.lastName= array[1];
  }
  feedpet(time){
    this.lastfed=time;
    return `last feed ${this.last}`
  
  }
  }
  const Bella = new pet('Bella', 2 , 'Dog',"8:00");
  Bella.fullName = "Bella crompton"
  console.log(Bella)
  