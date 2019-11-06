const movies = require('./movies');


const person = {
    firstName: "Nemuel",
    lastName: "Lim",
    age: 28
};
//log an object
console.log(person);

//add function
function addNumber(a, b) {
    return a + b;
}
console.log(addNumber(7, 3));

//print a log using variable with anonymous function
const printBacon = () => {
    console.log("Bacon is healthy, don't believe the doctors!");
}
printBacon();
// set a schedule time for ouput data
setTimeout(printBacon, 5000);


function placeAnOrder(orderNumber) {
    console.log("Customer order:", orderNumber);
    cookAndDeliverFood(() => {
        //   console.log("Delivered food order:", orderNumber);

    })
};

function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);

console.log(19 == '19'); // values only
console.log(19 === '19'); // valaues and types

//Reference to whatever thing is calling it
const Nemuel = {
    printFirstName: function () {
        console.log("My Name is Nemuel");
        console.log(this === Nemuel);
    }
};
Nemuel.printFirstName();

//The default calling context is global
function doSomethingWorthless() {
    console.log("\nI am worthless");
    console.log(this === global);

}
doSomethingWorthless();

function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

const Bucky = new User();
var Wendy = new User();

Bucky.name = "Bucky";
Wendy.name = "Wendy";


Bucky.giveLife(Wendy);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);

// you can add function to all objects
User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Wendy.uppercut(Bucky);
console.log("Bucky: " + Bucky.life);
console.log("Wendy: " + Wendy.life);


// you can add pproperties to all objects
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);

/* movies.printAvatar();
console.log(movies.favMovie); */


require('./emily');
require('./bucky');

const fs = require('fs');
const path = require('path');
const websiteHome = "Desktop/Bucky/thenewboston/index.html";
const websiteAbout = "Desktop/Bucky/thenewboston/about.html";
console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));


fs.writeFileSync("corn.txt", "Corn is good, corn is life");
console.log(fs.readFileSync("corn.txt").toString());

/* setInterval(() => {
    console.log("beef");
}, 2000); */
/* 
console.log(__dirname);
console.log(__filename); */