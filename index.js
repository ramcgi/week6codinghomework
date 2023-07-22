console.log("hi???")
// class Game{
//     constructor(cards){
//         this.deck = [];
//         this.makeDeck();
//         this.round = 0;
//         this.player1 = new this.player1(1);
//         this.player2 = new this.player1(2);
//         this.dealCards();
//         // this.cards = cards;
//     }
//     makeDeck(){
//         for (let x = 0; x < CSSFontFeatureValuesRule.length; x++ ){
//             for (let suit of suits){
//                 // console.log(`${suit} of ${values[X]}`);
//                 let card = new card(suit, x+1, values[x]);
//                 this.deck.push(card);
//             }
//         }
//         for(var i = this.deck.length -1; i > 0; i--){
//             var j = math.floor(Math.random() * (i + 1));
//             var temp = this.deck[i];
//             this.deck[j] = temp;
//         }
//     }
//     dealCards(){
//         this.player1.hand = this.deck.splice(0,26);
//         this.player2.hand = this.splice(0,25);
//         this.deck[j]
//     }
// }

// Card class
class Card {
    constructor(suit, rank) {
      this.suit = suit;
      this.rank = rank;
    }
  
    compare(card) {
      if (this.rank > card.rank) {
        return 1;
      } else if (this.rank < card.rank) {
        return -1;
      } else {
        return 0;
      }
    }
  }
  
  // Deck class
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks = [
        'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'
      ];
  
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(suit, rank));
        }
      }
    }
  
    shuffle() {
    /*
      const cards = this.cards
      let currentIndex = cards.length, temporaryValue, randomIndex;
  
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
      }
    */

      //for (let i = arr.length - 1; i > 0; i--)

      for(var i = this.deck.length -1; i > 0; i--){
                  var j = math.floor(Math.random() * (i + 1));
                     var temp = this.deck[i];
                   this.deck[j] = temp;


    {
     
        // Pick a random index from 0 to i inclusive
        l//et j = Math.floor(Math.random() * (i + 1));
 
        // Swap arr[i] with the element
        // at random index
        //[arr[i], arr[j]] = [arr[j], arr[i]];
    }
    }

  
    dealCard() {
      return this.cards.pop();
    }
  }
  
  // Player class
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  
    playCard() {
      return this.hand.pop();
    }
  
    addCardToHand(card) {
      this.hand.unshift(card);
    }
  
    get score() {
      return this.hand.length;
    }
  }
  
  // Game logic
  class Game {
    constructor() {
      this.deck = new Deck();
      this.player1 = new Player('Player 1');
      this.player2 = new Player('Player 2');
    }
  
    start() {
    this.deck.shuffle();
      this.dealCards();
  
      while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();
  
        const comparison = card1.compare(card2);
        if (comparison === 1) {
          this.player1.addCardToHand(card1);
          this.player1.addCardToHand(card2);
        } else if (comparison === -1) {
          this.player2.addCardToHand(card1);
          this.player2.addCardToHand(card2);
        } else {
          // Handle tie
          this.player1.addCardToHand(card1);
          this.player2.addCardToHand(card2);
        }
      }
  
      this.displayScore();
      this.displayWinner();
    }
  
    dealCards() {
      for (let i = 0; i < 26; i++) {
        this.player1.addCardToHand(this.deck.dealCard());
        this.player2.addCardToHand(this.deck.dealCard());
      }
    }
  
    displayScore() {
      console.log(`${this.player1.name} score: ${this.player1.score}`);
      console.log(`${this.player2.name} score: ${this.player2.score}`);
    }
  
    displayWinner() {
      if (this.player1.score > this.player2.score) {
        console.log(`${this.player1.name} wins!`);
      } else if (this.player1.score < this.player2.score) {
        console.log(`${this.player2.name} wins!`);
      } else {
        console.log('It\'s a tie!');
      }
    }
  }
  
  // Create a new game instance and start the game
  const game = new Game();
  game.start();