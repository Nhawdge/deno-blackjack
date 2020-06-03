import Card from './Card.ts'
import Suite from './Suite.ts'
import Face from './Face.ts'
import Value from './Value.ts'

export default class Deck {
    cards: Array<Card> = new Array<Card>();

    constructor() {
        for (let i = 0; i < 52; i++) {
            let suite = Math.floor(i / 13) as Suite;
            var value = (i % 13 > 9 ? 9 : i % 13) + 1 as Value;
            var face = i % 13 as Face;
            var card = new Card(suite, value, face);
            this.cards.push(card);
        }
        this.shuffle();
    }

    shuffle() {
        var shuffledDeck = new Array<Card>();
        var debug = "";
        while (this.cards.length) {
            var rand = Math.floor((Math.random() * 1000) % this.cards.length);
            var card = this.cards.splice(rand, 1)[0];
            shuffledDeck.push(card);
        }
        this.cards = shuffledDeck;
    }
}