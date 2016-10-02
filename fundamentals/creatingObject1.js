function vehicleContructor(name, num_of_wheels, num_of_passengers){
	this.name = name;
	this.num_of_wheels = num_of_wheels;
	this.num_of_passengers = num_of_passengers;
	makenoise: function(){
	}
}
var Bike = new vehicleContructor('Bike', 2, 4);
Bike.makenoise() = "ring ring"
var Sedan = new vehicleContructor('Sedan', 4, 13);
Sedan.makenoise() = "honk honk"
var Bus = new vehicleContructor('Bus', 8, 20);
Bus.pickup(function(num){
	this.num_of_passengers += num;
})