import IDFactory from '../utils/IdGeneratorFactory';

const idFactory = new IDFactory()

export default class Todo {
    public id: number;
    constructor(public task: string, public completed: boolean = false) {
        this.id = idFactory.getNextId();
    }
}