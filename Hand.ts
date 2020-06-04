import Card from "./Card.ts";
import Face from "./Face.ts";

export default class Hand {
    cards = new Array<Card>();

    get value(): number {
        var total = this.cards.map((x) => x.value).reduce((a, c) => a + c, 0);
        var aces = this.cards.filter(x => x.face == Face.Ace);
        if (aces.length && total > 21) {
            total - 10;
        }
        return total;
    }

    toString(): string {
        return `${this.cards.map((x) => x.toString()).join("\n")}
        \nA total value of ${this.value}`;
    }
}
