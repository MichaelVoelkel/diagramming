import Connection from "./connection";
import Entity from "./entity";

export default class Layer {
    constructor(
        private entitites: Entity[],
        private connections: Connection[],
        ) {
    }

    addEntity(entity: Entity) {
        this.entitites.push(entity);
    }

    addConnection(connection: Connection) {
        this.connections.push(connection);
    }

    getEntities() : Entity[] {
        return this.entitites;
    }

    rearrange() {
        this.entitites.forEach(
            (value: Entity) => {
                value.x = Math.random() * 1000;
                value.y = Math.random() * 1000;
            });
    }
}