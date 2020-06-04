import Deck from "./Deck.ts";
import Hand from "./Hand.ts";
import Card from "./Card.ts";
import { readLines } from "https://deno.land/std/io/bufio.ts";

class Blackjack {
    Deck = new Deck();
    playerHand = new Hand();
    dealerDeck = new Hand();

    constructor() {
        this.NewGame();
    }

    NewGame() {
        this.Deck = new Deck();
        this.playerHand = new Hand();
        this.dealerDeck = new Hand();

        console.log("Welcome to Blackjack");
        this.Hit(this.playerHand);
        this.Hit(this.playerHand);
        this.Hit(this.dealerDeck);
        this.Hit(this.dealerDeck, true);
        this.GameStatus();

        this.GameLoop();
    }

    async GameLoop() {
        var validInput = false;
        while (!validInput) {
            validInput = true;
            var input = await prompt("What do you want to do? [hit/stay/quit]");

            switch (input.toLowerCase().trim()) {
                case "hit":
                    this.Hit(this.playerHand);
                    break;
                case "stay":
                    break;
                case "quit":
                    return;
                default:
                    validInput = false;
            }
        }
        // Dealer's turn
        if (this.dealerDeck.value == 21) {
            //Stay
        }
        else if (this.dealerDeck.value < 16 || this.dealerDeck.value < this.playerHand.value) {
            this.Hit(this.dealerDeck);
        }

        this.GameStatus();
        this.EndConditionCheck();
    }

    Hit(hand: Hand, hidden = false) {
        var card = this.Deck.cards.pop() as Card;
        card.hidden = false;
        hand.cards.push(card);
    }

    GameStatus() {
        console.log(
            "\n\nPlayer:\n",
            this.playerHand.toString(),
            "\nDealer:\n",
            this.dealerDeck.toString(),
        );
    }

    async EndConditionCheck() {
        var ended = false;
        if (this.playerHand.value > 21) {
            var playAgain = await prompt("You busted! Play again? [y/n]")
            if (playAgain.toLowerCase() == 'y') {
                this.NewGame();
            }
            else { ended = true; }
        }

        if (this.dealerDeck.value > 21) {
            var playAgain = await prompt("Dealer busted! Play again? [y/n]")
            if (playAgain.toLowerCase() == 'y') {
                this.NewGame();
            }
            else { ended = true; }
        }
        if (!ended) {
            this.GameLoop();
        }
    }

}

new Blackjack();


async function prompt(question: any): Promise<any> {
    console.log(question)
    for await (const line of readLines(Deno.stdin)) {
        return line.trim();
    }
}

// async function prompt(question: string) {
//     console.log(question)
//     var a = Deno.stdin.readSync();
//     console.log(a);
// }