import Card from "./Card.ts";
import Face from "./Face.ts";

export default class Hand {
    cards = new Array<Card>();

    value(hiddenValue: boolean = false): number {
        //hiddenValue = true;
        var cards = this.cards.filter(x => !x.hidden || hiddenValue);
        var total = cards.map((x) => x.value).reduce((a, c) => a + c, 0);
        var aces = cards.filter(x => x.face == Face.Ace && x.value > 1);
        if (aces.length && total > 21) {
            aces[0].value = 1;
            total = cards.map((x) => x.value).reduce((a, c) => a + c, 0);
        }

        return total;
    }

    toString(): string {
        return `${this.cards.map((x) => x.hidden ? "Hidden" : x.toString()).join("\n")}
        \nA total value of ${this.value()}`;
    }
}
