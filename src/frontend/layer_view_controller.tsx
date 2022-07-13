import React, { useState } from "react";
import { Label, Rect, Stage, Text, Layer } from "react-konva";
import LayerController from "../app/layer_controller";
import Entity from "../model/entity";

interface Props {
    layerController: LayerController;
}

export default function LayerViewController(props: Props) {
    const layerController = props.layerController;

    const [entities, setEntities] = useState([] as Entity[]);
    
    layerController.layerChanged.connect(() => {
        setEntities([...layerController.getEntities()]);
        console.log("changed")
    }
        )

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Label x={0} y={0} width={100} height={20} fill="brown" onClick={
                    () => {layerController.addEntity("hi");
                    console.log(entities.length);
                    }
                }><Text text={ String(entities.length) } />
                    </Label>

                    
                    
                {
                    entities.map((entity) => {
                        console.log("ENT has " + entity.x);
                        return <Rect x={entity.x} y={entity.y} width={entity.width} height={entity.height} fill="red" /> 
                    }
                    )
                }
            </Layer>
        </Stage>
        );
}