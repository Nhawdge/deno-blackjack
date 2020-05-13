import Deck from './Deck.ts'
import Hand from './Hand.ts'
import Card from './Card.ts'

class Blackjack {
    Deck = new Deck();
    playerHand = new Hand();
    dealerDeck = new Hand();

    constructor() {
        this.NewGame();
    }

    NewGame() {
        console.log("Welcome to Blackjack")
        this.Hit(this.playerHand)
        this.Hit(this.playerHand)
        this.Hit(this.dealerDeck)
        this.Hit(this.dealerDeck)
        console.log("\nPlayer:\n", this.playerHand.toString(), "\nDealer\n", this.dealerDeck.toString())
    }

    Hit(hand: Hand) {
        hand.cards.push(this.Deck.cards.pop() as Card);
    }
}

new Blackjack();
