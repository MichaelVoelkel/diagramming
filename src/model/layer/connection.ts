import Entity from './entity'

export default class Connection {
    public constructor(
        public from: Entity,
        public to: Entity,
        public label: string) {
    }

    toObject() : {[key: string]: any} {
        return {
            "from": this.from.id,
            "to": this.to.id,
            "label": this.label
        };
    }

    static fromObject(object: {[key: string]: any}, entities: {[key: string]: Entity}) : Connection {
        return new Connection(
            entities[object.from],
            entities[object.to],
            object.label
        );
    }
}