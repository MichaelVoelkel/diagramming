import Layer from "../../model/layer/layer";
import LayerRepository from "../../model/layer/layer_repository";

export default class LocalStorageLayerRepository implements LayerRepository {
    static readonly LAYERS_KEY = "layers";

    save(layer: Layer): Promise<void> {
        return new Promise(resolve => {
            const layersJSON = localStorage.getItem(LocalStorageLayerRepository.LAYERS_KEY);

            let layers: {[index: string]: any} = {};
            if(layersJSON) {
                layers = JSON.parse(layersJSON);
            }

            layers[layer.getID()] = layer.toObject();
            
            localStorage.setItem(LocalStorageLayerRepository.LAYERS_KEY, JSON.stringify(layers));

            resolve();        
        });
    }

    get(id: string): Promise<Layer> {
        throw new Error('Method not implemented.');
    }

    getAll(): Promise<Layer[]> {
        return new Promise((resolve) => {
            const layersJSON = localStorage.getItem(LocalStorageLayerRepository.LAYERS_KEY);
            
            if(layersJSON) {
                const layerObjects = JSON.parse(layersJSON) as {[key: string]: any};

                const layers: Layer[] = [];
                for(const key in layerObjects) {
                    const newLayer = Layer.fromObject(layerObjects[key]);
                    layers.push(newLayer);
                }
                resolve(layers);
            }
            else {
                resolve([]);
            }
        });
    }
}