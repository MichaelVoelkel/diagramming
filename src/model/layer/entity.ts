// entity has also positional information because positioning is part of the domain
export default class Entity {
    public constructor(
        public id: string,
        public label: string,
        public x: number,
        public y: number,
        public width: number,
        public height: number) {

    }

    toObject() : {[key: string]: any} {
        return this;
    }

    static fromObject(object: {[key: string]: any}) : Entity {
        return new Entity(
            object.id,
            object.label,
            object.x,
            object.y,
            object.width,
            object.height
        );
    }
}