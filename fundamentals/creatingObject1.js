function vehicleContructor(name, num_of_wheels, num_of_passengers){
	this.name = name;
	this.num_of_wheels = num_of_wheels;
	this.num_of_passengers = num_of_passengers;
	this.makenoise = function(){
		console.log('ahl')
	};
}
var Bike = new vehicleContructor('Bike', 2, 4);
Bike.makenoise = function(){
	console.log('ring ring');
}
Bike.makenoise();

var Sedan = new vehicleContructor('Sedan', 4, 13);
Sedan.makenoise = function(){
	console.log("honk honk");
}
Sedan.makenoise();

var Bus = new vehicleContructor('Bus', 8, 20);
var num_of_passengers = Bus.num_of_passengers;

Bus.pickup = function(num){
	num_of_passengers += num;
	console.log(num_of_passengers);
	return Bus;
}
Bus.pickup(5).pickup(10).pickup(1100);

// ************************************************

function vehicleContructor(name, wheels, num_of_passengers){
	var vehicle = {};

	vehicle.name = name || "unicycle";
	vehicle.wheels = wheels || 1;
	vehicle.num_of_passengers = num_of_passengers || 0;

	vehicle.makenoise = function(noise){
		var noise = noise || "Honk Honk";
		console.log(noise);
	}
	return vehicle;
}

var unicycle = vehicleContructor();

var bike = vehicleContructor("bicycle", 2, 0);
bike.makenoise = function(){
	console.log('ring, ring');
}

var bus = vehicleContructor('bus', 6, 0);
bus.pickup = function(num){
	bus.num_of_passengers += num;
}