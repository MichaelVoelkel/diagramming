import Entity from "../model/layer/entity";
import Layer from "../model/layer/layer";
import {v4 as uuidv4} from 'uuid';
import { Signal } from "typed-signals";
import LayerRepository from "../model/layer/layer_repository";

export default class LayerController {
    private constructor(
        private layerRepository: LayerRepository,
        private layer: Layer
        ) {}

    static async create(layerRepository: LayerRepository) : Promise<LayerController> {
        return new Promise((resolve, reject) => {
            layerRepository.getAll().then((layers: Layer[]) => {
                let layer: Layer;
                if(layers.length > 0) {
                    layer = layers[0];
                    
                } else
                {
                    layer = new Layer("dummy", [], []);
                }

                resolve(new LayerController(layerRepository, layer));
            })
            .catch(_ => reject()
            )
        });
    }

    addEntity(label: string) {
        const newEntity = new Entity(
            uuidv4(),
            label,
            0,
            0,
            100,
            100     
        );
        
        this.layer.addEntity(newEntity);

        this.layer.rearrange();

        this.layerRepository.save(this.layer)

        this.layerChanged.emit();
    }

    moveEntityTo(id: string, x: number, y: number) {
        this.layer.moveEntityTo(id, x, y);

        this.layerRepository.save(this.layer);
        this.layerChanged.emit();
    }

    getEntities() : Entity[] {
        return this.layer.getEntities();
    }

    layerChanged = new Signal<() => void>();
}