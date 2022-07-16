import Connection from "./connection";
import Entity from "./entity";

// aggregate root
export default class Layer {
    constructor(
        private id: string,
        private entities: Entity[],
        private connections: Connection[],
        ) {
    }

    addEntity(entity: Entity) {
        this.entities.push(entity);
    }

    addConnection(connection: Connection) {
        this.connections.push(connection);
    }

    getID() : string {
        return this.id;
    }

    getEntities() : Entity[] {
        return this.entities;
    }

    toObject() : {[key: string]: any} {
        return {
            id: this.id,
            entities: this.entities.map(entity => entity.toObject()),
            connections: this.connections.map(connection => connection.toObject())
        };
    }

    static fromObject(object: {[key: string]: any}) : Layer {
        const entityObjects = (object.entities as {[key: string]: any}[]).map(entity => Entity.fromObject(entity));
        return new Layer(
            object.id,
            entityObjects,
            (object.connections as {[key: string]: any}[]).map(connection => Connection.fromObject(connection, {}))
        );
    }

    moveEntityTo(id: string, x: number, y: number) {
        this.entities.forEach(entity => {
            if(entity.id == id) {
                entity.x = x;
                entity.y = y;
            }
        });
    }

    rearrange() {
        this.entities.forEach(
            (value: Entity) => {
                value.x = Math.random() * 1000;
                value.y = Math.random() * 1000;
            });
    }
}