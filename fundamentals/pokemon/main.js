var game = {
	players: [],
	deck: [],
	addPlayer: function(){}	
};
function playerConstructor(name){
	player = {};
	player.name = name;
	player.hand = [];
	player.addCard = function(card){
		player.hand.push(card);
	}
	return player;
}
game.addPlayer(playerConstructor('Joe'));
game.addPlayer(playerConstructor('Sarad'));
console.log(game);

