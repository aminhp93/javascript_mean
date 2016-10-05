var __ = {
	map: function(arr, callback){
		var result = [];
		for (var i = 0; i < arr.length; i++){
			result.push(callback(arr[i]))
		}
		return result
	},
	reduce: function(arr){
		var result = 0;
		for (var i = 0; i < arr.length; i++){
			result += arr[i];
		}
		return result
	},
	find: function(arr, num){
		var result;
		for (var i = 0; i < arr.length; i++){
			if (num == arr[i]){
				result = i;
			}
		}
		return result
	},
	filter: function(arr, callback){
		var result = [];
		for (var i = 0; i < arr.length; i++){
			if (callback(arr[i])){
				result.push(arr[i]);
			}
		}
		return result
	},
	reject: function(arr, callback){
		var result = [];
		for (var i = 0; i < arr.length; i++){
			if (!callback(arr[i])){
				result.push(arr[i]);
			}
		}
		return result
	}
}

var events1 = __.map([1,2,3,4,5,6], function(num){
	return num * 2
})
console.log(events1);

var events2 = __.reduce([1,2,3,4,5,6]);
console.log(events2);

var events3 = __.find([1,2,3,4,5,6], 5);
console.log(events3);

var events4 = __.filter([1,2,3,4,5,6], function(num){
	return num % 2 == 0
})
console.log(events4);

var events5 = __.reject([1,2,3,4,5,6], function(num){
	return num % 2 == 0
})
console.log(events5);