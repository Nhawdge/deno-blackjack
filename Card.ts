import Suite from './Suite.ts'
import Face from './Face.ts'
import Value from './Value.ts'

export default class Card {
    suite: Suite;
    value: Value;
    face: Face;
    hidden = false;

    constructor(suite: Suite, value: Value, face: Face) {
        this.suite = suite;
        this.value = value;
        this.face = face;
        if (this.face == Face.Ace) {
            this.value = 11;
        }
    }

    toString(): string {
        return `${Face[this.face]} of ${Suite[this.suite]} has a value of ${this.value}`
    }
}
