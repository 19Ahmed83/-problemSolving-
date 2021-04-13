function Dog(name){
    this.name=name;
}

Dog.prototype.numLegs = 4;
let beagle=new Dog('Alpha')

let ownProps=[]
let prototypeProps=[]
for(let property in beagle){
    if(Dog.hasOwnProperty(property)){
        ownProps.push(property)
    }else{
        prototypeProps.push(property)
    }
}
console.log(ownProps)
console.log(prototypeProps)
console.log(beagle)