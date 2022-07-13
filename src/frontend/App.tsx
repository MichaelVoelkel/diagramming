import React from 'react'
import Entity from '../model/entity'
import LayerViewController from './layer_view_controller'
import connection from '../model/connection'
import LayerController from '../app/layer_controller';
import Layer from '../model/layer';



export default function App() {
    console.log("init");

    const layer = new Layer([], []);
    const layerController = new LayerController(layer);

    return <div><LayerViewController layerController={layerController} /></div>;
}