function runningLogger(){
	console.log('I am running');
}

function multiplyByTen(num){
	console.log(num * 10);
}
multiplyByTen(5);

function stringReturnOne(){
	console.log('minh1');
}

function stringReturnTwo(){
	console.log('minh2');
}

function caller(object){
	if (typeof(object) == "function"){
		console.log(object);
	}
}

function myDoubleConsoleLog(arg1, arg2){
	if ((typeof(arg1) == 'function') && (typeof(arg2) == 'function')){
		console.log(arg1, arg2);
	}
}

function caller2(object){
	console.log('starting');
	setTimeout(2000);
	if (typeof(object) == 'function'){
		console.log(object);
	}
	console.log('ending');
	return 'interesting'
}
caller2(myDoubleConsoleLog(caller, stringReturnTwo));