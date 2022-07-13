import Entity from "../model/entity";
import Layer from "../model/layer";
import {v4 as uuidv4} from 'uuid';
import { Signal } from "typed-signals";

export default class LayerController {
    constructor(private layer: Layer) {
    }

    addEntity(label: string) {
        this.layer.addEntity(new Entity(
            uuidv4(),
            label,
            0,
            0,
            100,
            100     
        ));

        this.layer.rearrange();

        this.layerChanged.emit();
    }

    getEntities() : Entity[] {
        return this.layer.getEntities();
    }

    layerChanged = new Signal<() => void>();
}