function sumall(x, y){
	var sum = 0;
	for (var i = x; i <= y; i++){
		sum += i;
	}
	return sum;
}

function minval(arr){
	var min = arr[0];
	for (var i = 1; i < arr.length; i++){
		if (min > arr[i]){
			min = arr[i];
		}
	}
	return min;
}

function average(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	return sum / arr.length;
}

var myobject = {
	 sumall: function(x, y){
		var sum = 0;
		for (var i = x; i <= y; i++){
			sum += i;
		}
		return sum;
	},
	minval: function(arr){
		var min = arr[0];
		for (var i = 1; i < arr.length; i++){
			if (min > arr[i]){
				min = arr[i];
			}
		}
		return min;
	},
	 average: function(arr){
		var sum = 0;
		for (var i = 0; i < arr.length; i++){
			sum += arr[i];
		}
		return sum / arr.length;
	}
}

person = {
	name: "minh",
	distance_traveled: 0,
	say_name: function(){
		console.log(person.name);
	},
	say_something: function(arg){
		console.log(person.name + "says" + arg);
	},
	walk: function(){
		console.log(person.name + 'is walking');
		person.distance_traveled += 3
		return person
	},
	run: function(){
		console.log(person.name + 'is running');
		person.distance_traveled += 10
		return person
	},
	crawl: function(){
		console.log(person.name + 'is crawling');
		person.distance_traveled += 1
		return person
	}
}

person.say_something('yes')