import React from 'react'
import Layer from '../model/layer'
import Entity from '../model/entity'
import LayerRepository from '../model/layer_repository'
import LayerViewController from './layer_view_controller'
import connection from '../model/connection'

class Repository implements LayerRepository {
    async addEntity(_: Entity): Promise<void> {
        console.log("nice")
        //throw new Error('Method not implemented.')
    }
    async addConnection(_: connection): Promise<void> {
        console.log("nicea")
    }

}

export default function App() {
    const rep = new Repository();
    const modelLayer = new Layer(rep, [], []);

    console.log("init");

    return <div><LayerViewController layer={modelLayer} /></div>;
}