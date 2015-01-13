$(document).ready(function() {

	//what does this do?
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}
	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; 
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	
	deck = shuffle(deck);

	var cards_player_1 = [];
	var cards_player_2 = [];

	// write a function called deal that will evently divide the deck up between the two players
	
	var deal = function(array) {
		for (var i = 0; i < array.length; i += 2) {
			cards_player_1.push(array[i]);
			cards_player_2.push(array[i + 1]);
		}
	}

	deal(deck);
	
// convert numberstring to textnumber

	var numText = function(num) {
		switch (num) {
				case 1:
				return 'one';
				break;
				case 2:
				return 'two';
				break;
				case 3:
				return 'three';
				break;
				case 4:
				return 'four';
				break;
				case 5:
				return 'five';
				break;
				case 6:
				return 'six';
				break;
				case 7:
				return 'seven';
				break;
				case 8:
				return 'eight';
				break;
				case 9:
				return 'nine';
				break;
				case 10:
				return 'ten';
				break;
				case 11:
				return 'eleven';
				break;
				case 12:
				return 'twelve';
				break;
				case 13:
				return 'thirteen';
				break;
			}
	}

	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.

	var war = function(card1, card2) {
		if (card1.number > card2.number) {
			return card1;
		}
		else if (card1.number === card2.number) {
			return false;
		}
		else {
			return card2;
		}
	}
	
	var cardImg = {
		spades: {
			one: "file:///Users/mperkins/Workbench/war/img/as.png",
			two: "file:///Users/mperkins/Workbench/war/img/2s.png",
			three: "file:///Users/mperkins/Workbench/war/img/3s.png",
			four: "file:///Users/mperkins/Workbench/war/img/4s.png",
			five: "file:///Users/mperkins/Workbench/war/img/5s.png",
			six: "file:///Users/mperkins/Workbench/war/img/6s.png",
			seven: "file:///Users/mperkins/Workbench/war/img/7s.png",
			eight: "file:///Users/mperkins/Workbench/war/img/8s.png",
			nine: "file:///Users/mperkins/Workbench/war/img/9s.png",
			ten: "file:///Users/mperkins/Workbench/war/img/10s.png",
			eleven: "file:///Users/mperkins/Workbench/war/img/11s.png",
			twelve: "file:///Users/mperkins/Workbench/war/img/12s.png",
			thirteen: "file:///Users/mperkins/Workbench/war/img/13s.png"
			},
		diamonds: {
			one: "file:///Users/mperkins/Workbench/war/img/ad.png",
			two: "file:///Users/mperkins/Workbench/war/img/2d.png",
			three: "file:///Users/mperkins/Workbench/war/img/3d.png",
			four: "file:///Users/mperkins/Workbench/war/img/4d.png",
			five: "file:///Users/mperkins/Workbench/war/img/5d.png",
			six: "file:///Users/mperkins/Workbench/war/img/6d.png",
			seven: "file:///Users/mperkins/Workbench/war/img/7d.png",
			eight: "file:///Users/mperkins/Workbench/war/img/8d.png",
			nine: "file:///Users/mperkins/Workbench/war/img/9d.png",
			ten: "file:///Users/mperkins/Workbench/war/img/10d.png",
			eleven: "file:///Users/mperkins/Workbench/war/img/11d.png",
			twelve: "file:///Users/mperkins/Workbench/war/img/12d.png",
			thirteen: "file:///Users/mperkins/Workbench/war/img/13d.png"
			},
		clubs: {
			one: "file:///Users/mperkins/Workbench/war/img/ac.png",
			two: "file:///Users/mperkins/Workbench/war/img/2c.png",
			three: "file:///Users/mperkins/Workbench/war/img/3c.png",
			four: "file:///Users/mperkins/Workbench/war/img/4c.png",
			five: "file:///Users/mperkins/Workbench/war/img/5c.png",
			six: "file:///Users/mperkins/Workbench/war/img/6c.png",
			seven: "file:///Users/mperkins/Workbench/war/img/7c.png",
			eight: "file:///Users/mperkins/Workbench/war/img/8c.png",
			nine: "file:///Users/mperkins/Workbench/war/img/9c.png",
			ten: "file:///Users/mperkins/Workbench/war/img/10c.png",
			eleven: "file:///Users/mperkins/Workbench/war/img/11c.png",
			twelve: "file:///Users/mperkins/Workbench/war/img/12c.png",
			thirteen: "file:///Users/mperkins/Workbench/war/img/13c.png"
			},
		hearts: {
			one: "file:///Users/mperkins/Workbench/war/img/ah.png",
			two: "file:///Users/mperkins/Workbench/war/img/2h.png",
			three: "file:///Users/mperkins/Workbench/war/img/3h.png",
			four: "file:///Users/mperkins/Workbench/war/img/4h.png",
			five: "file:///Users/mperkins/Workbench/war/img/5h.png",
			six: "file:///Users/mperkins/Workbench/war/img/6h.png",
			seven: "file:///Users/mperkins/Workbench/war/img/7h.png",
			eight: "file:///Users/mperkins/Workbench/war/img/8h.png",
			nine: "file:///Users/mperkins/Workbench/war/img/9h.png",
			ten: "file:///Users/mperkins/Workbench/war/img/10h.png",
			eleven: "file:///Users/mperkins/Workbench/war/img/11h.png",
			twelve: "file:///Users/mperkins/Workbench/war/img/12h.png",
			thirteen: "file:///Users/mperkins/Workbench/war/img/13h.png"
			}
	}


	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			console.log(card_1, card_2);
			var imgSrcOpp = cardImg[card_1.suit][numText(card_1.number)];
			var imgSrcMe = cardImg[card_2.suit][numText(card_2.number)];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#opp-card-img").attr("src", imgSrcOpp);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			$("#my-card-img").attr("src", imgSrcMe);
		}
	}
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	
	var tiestack = [];
	var play = function(){
		var card1 = cards_player_1[0];
		var card2 = cards_player_2[0];
		var winner = war(card1, card2);
		if (card1.number === winner.number) {
			cards_player_1.push(card1, card2);
			cards_player_1.shift() && cards_player_2.shift();
		}
		else if (card2.number === winner.number) {
			cards_player_2.push(card1, card2);
			cards_player_1.shift() && cards_player_2.shift();
		}
		else if (card1.number === card2.number) {
			tiestack = (tiestack.concat(cards_player_1.splice(0, 3))).concat(cards_player_2.splice(0, 3));
			play();
		}
		advance();
	}

	if (tiestack.length > 0) {
		cards_player_1 = cards_player_1.concat(tiestack);
	}
	




	// var card1_bd = cards_player_1[3];
	// var card2_bd = cards_player_2[3];
	// var winner_bd = war(card1_bd, card2_bd);
	// if (card1_bd.number === winner_bd.number) {
	// 	cards_player_1.push(card1_bd, card2_bd);
	// 	cards_player_1.splice(i, 1)

	// }
	
	advance();
	
	$(".btn").click(function() {
		play();
	});
});
