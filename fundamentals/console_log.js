// var myarr = [1, 5, 122, 53];

// for (var i in myarr){
// 	console.log(myarr[i] * 5);
// }

// var myobject = {
// 	language: 'javascript',
// 	city: 'washington DC',
// 	instructor: 'Minh'
// }

// Object.keys(myobject).forEach(function(key, value){
// 	console.log(key, value, myobject[key]);
// })

// console.log('hello world');
// var hello = "Wheel";
// var jelloo = 'jiggly';
// function greeting(){
// 	console.log("I will be hoisted");
// }

// var hello;
// var jello;
// function greeting(){
// 	console.log("I will be hoisted");
// }

// hello = "Wheel";
// jello = "jiggly";
// console.log("hello world");


// var my_first_variable;
// my_first_variable = "Data";
// console.log(my_first_variable);

// var myunknown = [1,2,4];
// console.log(typeof(myunknown));

// console.log(a);
// var a = "weird";

// console.log(typeof(b));
// var b = "weird too";
// console.log(typeof(b));

// var empty_array = [];
// var string_array = ['hi', 'these', 'are', 'string'];
// var x = 15;
// console.log("Logging variables to the console", empty_array, string_array, x);
// console.log('2nd value of string_array', string_array[1]);
// console.log('string_array has a length of', string_array.length);
// string_array.push('awesome');
// console.log(string_array);
// string_array.pop();
// console.log(string_array);

// var arr = [3, 6];
// arr[234] = 'hi';
// console.log(arr.length)
// console.log(arr[35])

// var arr = [3, 6];
// arr[234] = 'hi';
// console.log(arr.length);
// console.log(arr[234]);
// arr.length = 3;
// console.log(arr[34]);
// console.log(arr[234]);
// console.log(arr);
// arr.length = 400;
// console.log(arr[234]);
// console.log(arr.length);


// var dojo = {};
// dojo = {
// 	name: 'Coding Dojo',
// 	number_of_students: 25;
// 	instructors: ['Andrew', 'Michael', 'Jay'],
// 	location:{
// 		city: 'San Jose',
// 		state: 'CA',
// 		zipcode: 95112
// 	}
// }
// console.log(dojo.name, dojo.number_of_students, dojo.instructors, dojo.location);
// console.log(dojo['name']);
// dojo.number_of_students = 40;
// dojo.location.city = "Bellewvew:";

// var varFunction;
// varFunction();
// varFunction = function(){
// 	console.log("How will this get hoisetd?")
// }


// var hello = 'interesting';
// function example(){
// 	var hello = 'hi';
// 	console.log(hello);
// }
// example();
// console.log(hello);

// var Todd = {
// 	name: "Todd",
// 	sayName: function(){
// 		console.log("Todd");
// 	}
// }
// Todd.sayName();

// function NewPerson(name){
// 	// console.log(this);
// 	return {
// 		name: name,
// 		sayName: function(){
// 			console.log(name);
// 		}
// 	}
// }

// var Jay = NewPerson("Jay");
// var Sara = NewPerson("Sara");

// Jay.sayName();
// Sara.sayName();

// function Person(name){
// 	console.log(this);
// 	this.name = name;
// 	this.sayName = function(){
// 		console.log(name);
// 	}
// }
// var Jimmy = new Person('Jimmy');
// Jimmy.sayName();

// // Overview: This function creates game objects, by returning a game object when invoked
// function GameContructor(consumerPrice, dealerCost, name, inStock){
// 	// private variables
// 	// dealerCost is private so a buyer can't see our ridiculous markup!
// 	var consumerPrice = consumerPrice;
// 	var dealerCost = dealerCost;
// 	// if you are returning an object, set it as the last private variable
// 	var ourGame = {}; // end of private proportites
// 	// public proportites
// 	// _signifies a field that we shouldnot modify, but is public
// 	ourGame._name = name;
// 	ourGame.type = 'board game';
// 	ourGame.player = [];
// 	// public methods can affect private variables!
// 	ourGame.addPlayer = function(player_name){
// 		ourGame.player.push(player_name);
// 	}
// 	ourGame.showPrivateVairables = function(){
// 		console.log(dealerCost);
// 		console.log(consumerPrice);
// 	} // end of methods

// 	// private methods:
// 	function myPrivateFunction(){
// 		console.log("HEllo , i am going to create a new object when I am returned!");
// 	}
// 	// End private methods
// 	// run events prior to contruction if neccessary
// 	myPrivateFunction();
// 	// return your final object (We will learn about other strategies to construct object soon)
// 	return ourGame;
// }

// ************GameContructor****************
// private vars: consumerPrice, dealerCost
// private methods: myPrivateFunction: jsut console.log, no logic
// public properties: _name: acquried from parameters
// 			types: constant, 'board game'
// 			player: array

// public methods: addPlayer: adds a player by name to player array
// 			showPrivateVairables: console.logs our private variables

// on run: myPrivateFunction
// return: ourGame object
// *************END*************************
// function GameConstructor(consumerPrice,dealerCost,name, inStock){


//   var consumerPrice = consumerPrice;
//   var dealerCost = dealerCost;
//   var ourGame = {};


//   ourGame._name = name;
//   ourGame.type = 'board game';
//   ourGame.player = [];


//   ourGame.addPlayer = function(player_name){
//     ourGame.player.push(player_name);
//   }
//   ourGame.showPrivateVariables = function(){
//     console.log(dealerCost);
//     console.log(consumerPrice);
//   }


//   function myPrivateFunction(){
//     console.log('hello, I am going to create a new object when I am returned!');
//   }


//   myPrivateFunction();
//   return ourGame;
// }


// function NinjaContructor(name, prevOccupation){
// 	// var this = {};
// 	this.name = name;
// 	this.prevOccupation = prevOccupation;
// 	this.introduce = function(){
		// console.log("Hi my name is " + this.name + "I used to be a " + this.prevOccupation + " and now I am a ninja")
// 	}
// 	console.log(this);
// 	// return this;
// }
// console.log(this);
// var dylan = new NinjaContructor('Dylan', "Construction Worker");
// var nikki = NinjaContructor('Nikki', "historian");

// if (!(this instanceof NinjaContructor)){
// 	return new NinjaContructor(name, prevOccupation);
// }


// function Ninja(name, age, prevOccupation){
// 	// PRIVATE
// 	var privateVar = "this is a private variable";
// 	var privateMethod = function(){
// 		console.log("This is a private method")
// 	}
// 	// PUBLIC 
// 	this.name = name;
// 	this.age = age;
// 	this.prevOccupation = prevOccupation;
// 	this.introduce = function(){
// 		console.log("Hi my name is " + this.name + "I used to be a " + this.prevOccupation + " and now I am a ninja")
// 		privateMethod();
// 		console.log(privateVar);
// 	}
// }
// var Pariece = new Ninja('Pariece', 24, 'TFA Teacher');
// Pariece.privateMethod();
// privateMethod();
// Pariece.privateVar;


// function Ninja(name, age, prevOccupation){
// 	// PRIVATE
// 	var privateVar = "this is private variable";
// 	var privateMethod = function(){
// 		console.log(this);
// 	}
// 	// PUBLIC
// 	this.name = name;
// 	this.age = age;
// 	this.prevOccupation = prevOccupation;
// 	// PUBLIC METHODS DECLARED HERE
// 	this.introduce = function(){
// 		console.log("Hi my name is " + this.name + " I used to be a " + this.prevOccupation + " and Now I am a Ninja")
// 		privateMethod();
// 		console.log(privateVar);
// 	}
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();

// function Ninja(name, age, prevOccupation){
// 	// PRIVATE 
// 	var self = this;
// 	var privateVar = "This is a private variable"
// 	var privateMethod = function(){
// 		console.log("this is a method for " + self.name);
// 		console.log(self);
// 	}
// 	// PUBLIC 
// 	this.name = name;
// 	this.age = age;
// 	this.prevOccupation = prevOccupation;
// 	this.introduce = function(){
// 		console.log("Hi my name is " + this.name + " I used to be a " + this.prevOccupation + " and Now I am a Ninja")
// 		privateMethod();
// 		console.log(privateVar);
// 	}
// }
// var Speros = new Ninja("Speros", 24, "MBA");
// Speros.introduce();

// var MyObjConstructor = function(name){
//   var myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
//   this.name = name; // but you can see the name!
//   this.method = function(){
//     console.log( "I am a method");
//   };
// }
// var obj1 = new MyObjConstructor('object1');
// var obj2 = new MyObjConstructor('object2');
// console.log(obj1);

// function Cat(cat_name){
// 	var name = cat_name;
// 	this.getName = function(){
// 		return name;
// 	}
// }
// Cat.prototype.sayHi = function(){
// 	console.log('meow');
// }
// Cat.prototype.numLegs = 4;
// var muffin = new Cat('muffin');
// var biscuit = new Cat('biscuit');
// console.log(muffin, biscuit);
// muffin.sayHi();
// biscuit.sayHi();
// console.log(muffin.numLegs);


function Ninja(name){
	this.name = name;
	this.distance_traveled = 0;
}

Ninja.prototype.walk = function(){
	console.log(this.name + ' is walking');
	this.distance_traveled += 1;
	return this;
}

Ninja.prototype.run = function(){
	console.log(this.name + ' is running');
	this.distance_traveled += 5;
	this.displayDistanceTraveled();
	return this;
}

Ninja.prototype.displayDistanceTraveled = function(){
	console.log('distance_traveled: ', this.distance_traveled);
}

ninja1 = new Ninja('Jay');
ninja2 = new Ninja('Michael');
ninja3 = new Ninja('Andrew');

ninja1.walk().run().walk().run();
console.log(ninja1);












