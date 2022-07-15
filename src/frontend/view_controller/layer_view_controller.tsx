import React, { useState } from "react";
import { Label, Rect, Stage, Text, Layer, Group } from "react-konva";
import LayerController from "../../app/layer_controller";
import {v4 as uuidv4} from 'uuid';
export interface LayerViewControllerProps {
    layerController: LayerController;
}

export function LayerViewController(props: LayerViewControllerProps) {
    const layerController = props.layerController;

    const [entities, setEntities] = useState(layerController.getEntities());
    
    layerController.layerChanged.connect(() => {
        setEntities([...layerController.getEntities()]);
    });

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Label x={0} y={0} width={100} height={20} fill="brown" onClick={
                    () => {layerController.addEntity(uuidv4());
                    }
                }><Text text={ String(entities.length) } />
                    </Label>

                {
                    entities.map((entity) =>
                        <Group key={entity.id}>
                        <Rect x={entity.x} y={entity.y} width={entity.width} height={entity.height} fill="red" />
                        <Text align="center" verticalAlign="middle" x={entity.x} y={entity.y} width={entity.width} height={entity.height} text={entity.label} /> 
                        </Group>
                    )
                }
            </Layer>
        </Stage>
        );
}