function fib(){
	var num1 = 0;
	var num2 = 1;
	function nacci(){
		num3 = num1 + num2;
		num1 = num2;
		num2 = num3;
		console.log(num3);
	}
	console.log(num2, 'amin')
	return nacci
}

var fibCounter = fib();

fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();