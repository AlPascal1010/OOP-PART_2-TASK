class Animalia {
    constructor(name){
        if (new.target === Animalia){
            throw new Error ("Cannot instantiate abstract class directly")
        }
        this.name = name
    }

    feedingClass(){
        if (this.foodType == "Meat"){
            return `${this.name} is a Carnivore`
        }else if(this.foodType == "grass"){
            return `${this.name} is an Herbivore`
        }else if(this.foodType == "nectar"){
            return `${this.name} is a nectivore`
        }else if(this.foodType == "insect"){
            return `${this.name} is a insectivore`
        }         else {
            return `${this.name} is an Omnivore`
        }
    }

    backBoned(){
        if (this.hasBackbone == false){
            return `${this.name} is an invertebrate`
        }else if(this.hasBackbone == true){
            return `${this.name} is a vertebrate`
        } else {
            return `${this.name} is not from  this planet, this is some extra-terrestrial organism`
        }
    }

    BloodTemperature(){
        if (this.bloodTemp === "cold"){
            return `${this.name} is Poikilothermic`
        }else if(this.bloodTemp === "warm"){
            return `${this.name} is Homeothermic`
        }else {
            return `${this.name} must be an alien or is not a carbon based creature`
        }
    }
}


class vertebrate extends Animalia {
    hasBackbone = true
    constructor(name, habitat){
        super(name)
        this.habitat = habitat
    }
}

class invertebrate extends Animalia {
    hasBackbone = false
    constructor(name, habitat){
        super(name)
        this.habitat = habitat
    }
}

class Arthropoda extends invertebrate {
    bloodTemp= "cold"
    constructor(name, habitat, foodType){
        super(name, habitat)
        this.bodyCovering = "Scales"
        this.foodType = foodType
    }
}

class Fish extends vertebrate {
    bloodTemp= "cold"
    constructor(name, foodType){
        super(name)
        this.habitat = "Water"
        this.bodyCovering = "Scales"
        this.foodType = foodType
    }
}

class Amphibia extends vertebrate {
    bloodTemp= "cold"
    constructor(name, foodType){
        super(name)
        this.habitat = "Land And Water"
        this.bodyCovering = "Skin-stuff"
        this.foodType = foodType
    }
}

class Reptile extends vertebrate {
    bloodTemp= "cold"
    constructor(name, habitat, foodType){
        super(name, habitat)
        this.bodyCovering = "Scales"
        this.foodType = foodType
    }

}

class Aves extends vertebrate {
    bloodTemp= "warm"
    constructor(name, habitat, foodType){
        super(name, habitat)
        this.bodyCovering = "Feathers"
        this.foodType = foodType
    }
}



class Mammals extends vertebrate {
    bloodTemp= "warm"
    constructor(name, habitat, foodType){
        super(name, habitat)
        this.bodyCovering = "Hair"
        this.foodType = foodType
    }
}

let butterFly = new Arthropoda("Butter Fly", "Air", "nectar")
console.log(butterFly.name)
console.log(butterFly.backBoned())
console.log(butterFly.BloodTemperature());

let shark = new Fish("Tiger Shark", "Water", "Meat")
console.log("-------------------");
console.log(shark.name)
console.log(shark.backBoned())
console.log(shark.BloodTemperature());

let frog = new Amphibia("Poison-Arrow Frog", "insect")
console.log("-------------------");
console.log(frog.name)
console.log(frog.backBoned())
console.log(frog.BloodTemperature());

let turtle = new Reptile("Box Turtle", "Land", "Grass")
console.log("-------------------");
console.log(turtle.name)
console.log(turtle.backBoned())
console.log(turtle.BloodTemperature());

let eagle = new Aves("Golden Eagle", "Air", "Meat")
console.log("-------------------");
console.log(eagle.name)
console.log(eagle.backBoned())
console.log(eagle.BloodTemperature());


let cat = new Mammals("Tabby Cat", "Land", "Meat")
console.log("-------------------");
console.log(cat.name)
console.log(cat.backBoned())
console.log(cat.BloodTemperature());





