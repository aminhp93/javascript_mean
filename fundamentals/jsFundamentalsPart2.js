function sumall(x, y){
	var sum = 0;
	for (var i = x; i <= y; i++){
		sum += i;
	}
	console.log(sum);
}

function minval(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (min > arr[i]){
			min = arr[i];
		}
	}
	console.log(min);
}

function average(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	console.log(sum / arr.length);
}

person = {
	name: "minh",
	distance_traveled: 0
}

function say_name(person){
	console.log(person.name);
}

function say_something(person, arg){
	console.log(person.name + "says" + arg)
}

function walk(person){
	console.log(person.name + 'is walking');
	person.distance_traveled += 3
}

function run(person){
	console.log(person.name + 'is running');
	person.distance_traveled += 10
}

function crawl(person){
	console.log(person.name + 'is crawling');
	person.distance_traveled += 1
}