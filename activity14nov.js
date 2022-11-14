class Rental{
    constructor(name,postcode,tel,list){
        this.name=name;
        this.postcode=postcode;
        this.tel=tel;
        this.list=list
    }
     shopInfo(name){
        this.name= name
        return ` ${this.name} shop is in ${this.postcode} location and his contact number is:${this.tel}`

     }
}
const test= new Rental("test", "M1111", "07323232323","drame, classic, action")
console.log(test.shopInfo("simon"))