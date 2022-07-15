import Layer from "./layer";

export default interface LayerRepository {
    save(layer: Layer) : Promise<void>;
    get(id: string) : Promise<Layer>;
    getAll() : Promise<Layer[]>;
}