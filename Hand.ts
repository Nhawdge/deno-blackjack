import Card from "./Card.ts";

export default class Hand {
    cards = new Array<Card>();

    value(): Number {
        return this.cards.map(x => x.value).reduce((a, c) => a + c, 0);
    }
    toString(): string {
        return this.cards.map(x => x.toString()).join("\n");
    }
}