// mean();
// console.log(food);
// mean = function(){
// 	// function mean(){
// 	food = 'chicken';
// 	console.log(food);
// 	var food = 'fish';
// 	console.log(food);
// }
// mean();
// console.log(food);

// console.log(genre);
// var genre = 'disco';
// rewind();
// function rewind(){
// 	console.log(genre);
// 	var genre = 'rock';
// 	// console.log(genre);
// 	// var genre = 'r&b';
// 	// console.log(genre);
// }
// console.log(genre);

var abc = function Person(name, age){
	this.name = name;
	this.age = age;
}

// Personabc.prototype.count = 0;
console.log('amin1')

Person.prototype.count = 0;
console.log('amin')
Person.prototype.talk = function(){
	console.log("asf")
}

person1 = new Person('Minh', 12);
console.log(person1);
console.log(Person.prototype)