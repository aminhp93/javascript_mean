function Outer(){
	var count = 0;
	function inner(){
		count ++;
		console.log(count);
	}
	return count;
}

var counter = Outer();
console.log(counter);
// counter();
// counter();
// counter();
// counter();
// counter();

// console.log(count);