// function ninjaBelt(ninja, beltColor){
// 	console.log("ninja " + ninja + " has earned a " + beltColor + " belt");
// }

// ninjaBelt("Elen", "black");

function ninjaBelt(ninja){
	return function belt(beltColor){
		console.log("Ninja " + ninja + " has earned a " + beltColor + " belt");
	}
}

ninjaBelt('Elen')('black');