import React, { useEffect, useState } from 'react'
import {LayerViewController, LayerViewControllerProps} from './view_controller/layer_view_controller'
import LayerController from '../app/layer_controller'
import LocalStorageLayerRepository from '../infra/repository/local_storage_layer_repository';
import Layer from '../model/layer/layer';

export default function App() {
    const [layerController, setLayerController] = useState<LayerController>();

    useEffect(() => {
        (async () => {
            const some = LayerController.create(new LocalStorageLayerRepository());
            some.then(value => setLayerController(value));
            some.catch(_ => console.log("damn"));
        })();
        
    }, [setLayerController]);

    return <React.Fragment>{layerController != undefined ? 
        (<LayerViewController layerController={layerController!} />)
        :
            <div>Loading</div>
        }
        </React.Fragment>
}