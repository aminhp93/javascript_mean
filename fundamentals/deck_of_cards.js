function Deck(){
	this.buildDeck();
}

Deck.prototype.buildDeck = function(){
	var suits = ['diamonds', 'clubs', 'hearts', 'spades'],
      values = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king'],
      self = this;

    this.cards = [];

    suits.forEach(function(suit){
    	values.forEach(function(value){
    		self.cards.push(new Card(value, suit));
    	})
    })
    return this;
}

Deck.prototype.shuffle = function(){
	var unshuffleEdge = this.cards.length,
		cardToShuffleIdx,
		temp;

	while (unshuffleEdge > 0){
		cardToShuffleIdx = Math.floor(Math.random() * unshuffleEdge);
		unshuffleEdge -= 1;

		temp = this.cards[cardToShuffleIdx];
		this.cards[cardToShuffleIdx] = this.cards[unshuffleEdge];
		this.cards[unshuffleEdge] = temp;
	}
	return this;
}

Deck.prototype.reset = function(){
	this.buildDeck().shuffle();
}

Deck.prototype.dealCard = function(){
	return (this.cards.length > 0) ? this.cards.pop() : null;
}

function Card(value, suit){
	this.value = value;
	this.suit = suit;
}

function Player(name){
	this.name = name;
	this.hand = [];
}

Player.prototype.takeCard = function(deck){
	this.hand.push(deck.dealCard());
	return this;
}

Player.prototype.discard = function(cardIdx){
	if (this.hadn.length > cardIdx){
		this.hand.splice(cardIdx, 1);
	}
	return this;
}








// function Deck(){

// 	this.deck_of_card = deck(); 
// 	function deck(){
// 		var result = [];
// 		for (var i = 1; i < 53; i++){
// 			result.push(i);
// 		}
// 		return result;
// 	}

// 	this.shuffle = function(){
// 		var result = [];
// 		var array = this.deck_of_card;
// 		for (var i = 0; i < 52; i++){
// 			var temp = array[Math.floor(Math.random() * (52-i) + i)];
// 			for (var j = i; j < 52; j++){
// 				if (array[j] == temp){
// 					array[j] = array[i];
// 				}
// 			}
// 			array[i] = temp;
// 			result.push(array[i]);
// 		}
// 		console.log(JSON.stringify(result));
// 		this.deck_of_card = result;
// 		return this;
// 	}

// 	this.reset = function(){
// 		this.deck_of_card = deck();
// 		return this;
// 	}

// 	this.deal = function(){
// 		var random_number = Math.floor(Math.random() * 51);
// 		var random_card = this.deck_of_card[random_number];
// 		this.deck_of_card.splice(random_number, 1);
// 		// console.log(JSON.stringify(this.deck_of_card));
// 		return random_card;
// 	}

// }

// deck1 = new Deck();
// // console.log(deck1.number_of_card);
// // console.log(JSON.stringify(deck1.shuffle()));
// // console.log(deck1.shuffle().reset());
// // console.log(deck1.deal());


// function Player(name){
// 	this.name = name;
// 	this.hand = [];

// 	this.take_card = function(){
// 		deck = new Deck();
// 		this.hand.push(deck.deal());
// 		return this;
// 	};

// 	this.discard = function(card){
// 		var result;
// 		for (var i=0; i < this.hand.length; i++){
// 			if (this.hand[i] == card){
// 				result = i;
// 			}
// 		}
// 		this.hand.splice(result, 1);
// 		return this;
// 	};
// }

// player1 = new Player('minh');
// x = player1.take_card().take_card().take_card();
// console.log(x);
