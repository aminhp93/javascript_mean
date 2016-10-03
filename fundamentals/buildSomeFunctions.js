function runningLogger(){
	console.log('I am running');
}

function multiplyByTen(num){
	return num * 10;
}
multiplyByTen(5);

function stringReturnOne(){
	return 'minh1';
}

function stringReturnTwo(){
	return 'minh2';
}

function caller(object){
	if (typeof(object) == "function"){
		object();
	}
}

function myDoubleConsoleLog(arg1, arg2){
	if ((typeof(arg1) == 'function') && (typeof(arg2) == 'function')){
		console.log(arg1(), arg2());
	}
}

function caller2(object){
	console.log('starting');
	var x = setTimeout(function(){
		if (typeof(object) == 'function'){
			object(stringReturnTwo, stringReturnOne);
		}
	}, 4000);
	
	console.log('ending');
	return 'interesting'
}
caller2(myDoubleConsoleLog);