// function myOriginalFunction(){
// 	console.log('hello');
// }

// // myOriginalFunction();

// function invokedFunction(callback){
// 	var x = setTimeout(function(){
// 		callback();
// 	}, 4000);
// }

// invokedFunction(myOriginalFunction);
// invokedFunction(function(){
// 	console.log('world');
// })

// var ninja = "Libby";
// setTimeout(function(){
// 	console.log(ninja);
// }, 2000);
// console.log(ninja);

// console.log("NOW");
// console.log("Declaring and assigning variable 'ninja'.");
// var ninja = 'Libby';

// setTimeout(function myCallbackFunction(){
// 	console.log("Later");
// 	console.log(ninja, "later")
// }, 2000);

// console.log("Printing ninja value");
// console.log(ninja, "NOW");

// var a = 2;
// var b = function(){
// 	console.log("something");
// }

// function doSomething(e){
// 	console.log(typeof(e));
// }

// doSomething(a);
// doSomething(b);


// function doSomething(possibleCallback){
// 	if (typeof(possibleCallback) === 'function'){
// 		console.log("possibleCallback is a callback");
// 		possibleCallback();
// 	} else {
// 		console.log('possibleCallback:', possibleCallback, ' is not a callback function');
// 	}
// }

// doSomething(function myCallback(){
// 	console.log("yes, i am a callback");
// })

// doSomething("string");


// function makePasta(pasta, amin){
// 	console.log("Boiling water");
// 	console.log("Putting " + pasta + " pasta in the water");

// 	var sauce = amin();
// 	console.log("mxxing sause");

// 	console.log("Pasta is done");
// 	return pasta + " Pasta! Voila!" + sauce + "sauce! Voial";
// }

// function makePesto(){
// 	console.log("making pesto");
// 	return 'pesto';
// }

// function makeAlfredo(){
// 	console.log("making alfredo");
// 	return "alfredo";
// }

// console.log(makePasta("Penne", makePesto));
// console.log(makePasta('Farfalle', makeAlfredo));


// function leadBootcamp(language, leader){
// 	var outcome = leader(language);
// 	console.log(outcome);
// }

// function Mike(language){
// 	var languages = {
// 		'javascript': 'successful leader',
// 		'PHP': 'successful leader',
// 		'Python': 'successful leader'
// 	}

// 	if (languages[language]){
// 		return languages[language];
// 	}
// 	else {
// 		return 'maybe not yet';
// 	}
// }

// function Charlie(language){
// 	var languages = {
// 		'javascript': 'successful leader',
// 		'PHP': 'successful leader',
// 		'ruby': 'successful leader'
// 	}

// 	if (languages[language]){
// 		return languages[language];
// 	} else {
// 		return 'maybe not yet';
// 	}
// }

// function Jimmy(language){
// 	var languages = {
// 		'javascript': 'successful leader',
// 		'PHP': 'successful leader',
// 		'Python': 'successful leader'
// 	}

// 	if (languages[language]){
// 		return languages[language];
// 	} else {
// 		return 'maybe';
// 	}
// }

// leadBootcamp('ruby', Mike);
// leadBootcamp('ruby', Jimmy);
// leadBootcamp('ruby', Charlie);

// function printResult(doSomething){
// 	var result = doSomething();
// 	console.log(result);
// }
// printResult(function returnFive(){
// 	return 5;
// })

// function each(arr, callback){
// 	for (var i = 0; i < arr.length; i++){
// 		callback(arr[i]);
// 	}
// }

// each([1,2,3], function(num){
// 	console.log(num + " I am from the callback")
// })

// function getStuffFromDatabase(callback){
// 	var data;
// 	var myTimer = setInterval(function(){
// 		if (typeof(callback) == "function"){
// 			data = [{name: 'Todd'}, {name: 'Michael'}, {name: 'Portia'}];
// 			callback(data);
// 		}
// 	}, 3000);
// 	// return data;
// }

// function requestDataFromDatabase(){
// 	var data = getStuffFromDatabase(function myCallback(amin){
// 		console.log(amin, 'ASynchronous')
// 		for (var i = 0; i < amin.length; i++){
// 			console.log(amin[i].name);
// 		}
// 	});
// 	console.log(data, "Synchoronous");
// }

// function requestDataFromDatabase2(){
// 	var data = getStuffFromDatabase(function myCallback(amin){
// 		console.log(amin, 'ASynchronous2')
// 		for (var i = 0; i < amin.length; i++){
// 			console.log(amin[i].name);
// 		}
// 	});
// 	console.log(data, "Synchoronous2");
// }

// function catchFly(){
// 	console.log("i just caught a fly");
// }

// requestDataFromDatabase();
// requestDataFromDatabase2();

// console.log("hello");
// catchFly();

function getStuffFromDatabase(resolve, reject){
	var data = "whee";
	setTimeout(function(){
		// if (typeof(callback) == 'function'){
			data = [{name: 'Todd'}, {name: 'Michael'}, {name: 'Portia'}];
			resolve(data);
		// }
	}, 3000);
	// reject();
	// return data;
}

function requestDataFromDatabase(){
	console.log('running');
	// create promise
	var data = new Promise(function(resolve, reject){
		getStuffFromDatabase(resolve, reject);
	})
	// if promise is successful
	data.then(function(data1){
		console.log(data1, "ASynchronous");
		for (var i = 0; i < data1.length; i++){
			console.log(data1[i].name);
		}
	})
	data.catch(function(){
		console.log('failure');
	})
	console.log('end');
}

requestDataFromDatabase();



























