function vehicleContructor(name='NO NAME', num_of_wheels=1, num_of_passengers=1, speed=10){
	if (!(this instanceof vehicleContructor)){
		return new vehicleContructor(name='NO NAME', num_of_wheels=1, num_of_passengers=1, speed=10);
	}

	this.name = name;
	this.num_of_wheels = num_of_wheels;
	this.num_of_passengers = num_of_passengers;
	this.speed = speed;
	this.makenoise = function(){
		console.log('noisyyyyy car ever')
	};
	var distance_travelled = 0;
	var updateDistanceTravelled = function(){
		distance_travelled += speed;
	}
	this.move = function(){
		updateDistanceTravelled();
		this.makenoise();
		return this;
	}
	this.checkMiles = function(){
		console.log(distance_travelled);
	}
}
// var Bike = new vehicleContructor('Bike', 2, 4);
// Bike.makenoise = function(){
// 	console.log('ring ring');
// }
// Bike.makenoise();

// var Sedan = new vehicleContructor('Sedan', 4, 13);
// Sedan.makenoise = function(){
// 	console.log("honk honk");
// }
// Sedan.makenoise();

// var Bus = new vehicleContructor('Bus', 8, 20);
// var num_of_passengers = Bus.num_of_passengers;

// Bus.pickup = function(num){
// 	num_of_passengers += num;
// 	console.log(num_of_passengers);
// 	return Bus;
// }
// Bus.pickup(5).pickup(10).pickup(1100);

var Car = new vehicleContructor('Car', 4, 10, 30);
console.log(this);
Car.makenoise();
Car.move().move().checkMiles();
