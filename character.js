function Character(name, profession, gender, age, strength, hitpoints){
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitpoints = hitpoints;

    this.printStats = function(){
        console.log("Name: "+this.name+"\nProfession: "+this.profession+"\nGender: "+this.gender+"\nAge: "+this.age+"\nStrength: "+this.strength+"\nHitpoints: "+this.hitpoints);
    };

    this.isAlive = function(){
        if(this.hitpoints > 0){
            console.log(this.name+" is alive!");
            return true;
        }else {
            console.log(this.name+" is dead!");
            return false;
        }
    }

    this.attack = function(character2){
        character2.hitpoints -= this.strength;
    }

    this.levelUp = function(){
        this.age += 1;
        this.strength += 5;
        this.hitpoints += 25;
    }

}

var warrior = new Character("Crusher","Warrior","Male",25,10,75);
var rogue = new Character("Dodger","Rogue","Female",23,20,50);

warrior.printStats();
console.log();
rogue.printStats();

rogue.attack(warrior);
console.log();
warrior.printStats();
warrior.isAlive();

rogue.levelUp();
console.log();
rogue.printStats();