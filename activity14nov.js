class Rental{
    constructor(name,postcode,tel,list){
        this.name=name;
        this.postcode=postcode;
        this.tel=tel;
        this.list=list
    }
     shopInfo(name){
        this.name= name
        return ` ${this.name} shop is in ${this.postcode} location and they contact number is:${this.tel} and list of available movies is ${this.list}.`

     }
}
class addMovie extends Rental{
  constructor(name,postcode,tel,list,nmovies,price){
    super(name,postcode,tel,list);
    this.nmovies=nmovies;
    this.price=price
}
addM(name){
  this.name=name;
  return `${this.name} shop is in ${this.postcode} location and they contact number is:${this.tel} and list of available movies is ${this.list[0]} ${this.price[0]} ${this.list[1]} ${this.price[1]} ${this.list[2]} ${this.price[2]} and has new movies:${this.nmovies[0]} ${this.price[4]} ${this.nmovies[1]} ${this.price[4]} ${this.nmovies[2]} ${this.price[4]} ${this.nmovies[3]} ${this.price[4]} .`
}
}
const test= new Rental("test", "M1111", "07323232323","drama, classic, action")
const nem = new addMovie("test", "M1111", "07323232323","drama, classic, action","star wars, mafia, life in jungle3, spider man 12")
const price = new addMovie("test", "M1111", "07323232323",["drama", 'classic', "action"],["star wars", 'mafia', "life in jungle3", "spider man 12"],["price:2£","price:3£","price:4£","price:5£","price:6£"])
console.log(price.addM("desk-1"))
