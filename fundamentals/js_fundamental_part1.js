x = [3.5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for (var i = 0; i < x.length; i++){
	console.log(x[i]);
}

x.push(100);
console.log(x);
x.push(['hello', 'world', 'JavaScript is Fun'])
console.log(x);

var result = 0
for (var i = 1; i < 501; i++){
	result += i;
}
console.log(result);

x = [1, 5, 90, 25, -3, 0];
var min = x[0];
var sum = x[0];
for (var i = 1; i < x.length; i++){
	if (min > x[i]){
		min = x[i];
	}
	sum += x[i];
}
console.log(min);
console.log(sum/(x.length));

var new_ninja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript',
	dojo: 'Dallas'
}

for (var key in new_ninja){
	console.log(key, new_ninja[key]);
}