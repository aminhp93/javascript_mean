// var customObject = {
// 	name: 'California, Eureka',
// 	onClick: function(myParam){
// 		console.log("I'vae been clicked");
// 		console.log(myParam, "I've been passed by bind")
// 		console.log(this.name);
// 	}
// }

// var newObject = {
// 	name: 'West Virginia, Montani semper liberi'
// }

// $('button').click(customObject.onClick.bind(customObject, 'Bind this argument'));
// // $('button').click(customObject.onClick.bind(newObject));


function Ninja(name, age){
	this.name = name;
	this.age = age;
}

function BlackBelt(name, age){
	Ninja.call(this, name, age);
	this.belt = 'black';
}

function YellowBelt(name, age){
	Ninja.apply(this, [name, age]);
	this.belt = 'yellow';
}

var yB = new YellowBelt('mike', 40);
var bB = new BlackBelt('charlie', 29);
console.log(bB.name);
console.log(yB.name);

function levelUp(){
	console.log(this.name + ' has learned a new kata, in ' + this.gender + ' favorite language: ' + this.language);
}

var person = {
	name: "lisa",
	gender: 'her',
	language: "javascript, dub"
}

levelUp.call(person);













