import Connection from "./connection";
import Entity from "./entity";

export default interface LayerRepository {
    addEntity(entity: Entity): Promise<void>;
    addConnection(connection: Connection): Promise<void>;
}