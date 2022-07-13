import Connection from "./connection";
import Entity from "./entity";
import { Signal } from "typed-signals";
import LayerRepository from "./layer_repository";

export default class Layer {
    constructor(
        private layerRepository: LayerRepository,
        private entitites: Entity[],
        private connections: Connection[],
        ) {
    }

    addEntity(entity: Entity) {
        this.entitites.push(entity);
        this.rearrange();
        this.layerRepository.addEntity(entity);
    }

    addConnection(connection: Connection) {
        this.connections.push(connection);
        this.rearrange();
        this.layerRepository.addConnection(connection);
    }

    getEntities() : Entity[] {
        return this.entitites;
    }

    rearrange() {
        this.entitites.forEach(
            (value: Entity) => {
                value.x = Math.random() * 1000;
                value.y = Math.random() * 1000;
                console.log(value.x + " " + value.y);
            });
        this.layerChanged.emit();
    }

    layerChanged = new Signal<() => void>();
}