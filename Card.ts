import Suite from './Suite.ts'
import Face from './Face.ts'
import Value from './Value.ts'

export default class Card {
    suite: Suite;
    value: Value;
    face: Face;

    constructor(suite: Suite, value: Value, face: Face) {
        this.suite = suite;
        this.value = value;
        this.face = face;
    }
    toString(): string {
        return `${Face[this.face]} of ${Suite[this.suite]} has a value of ${this.value}`
    }
}