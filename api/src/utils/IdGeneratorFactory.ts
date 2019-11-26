export default class IDFactory {
    constructor(private seed: number = 0) { }
    getNextId() {
        return ++this.seed;
    }
}