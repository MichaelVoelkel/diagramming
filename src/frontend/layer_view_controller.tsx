import React, { useState } from "react";
import { Label, Rect, Stage, Text, Layer } from "react-konva";
import Entity from "../model/entity";
import ModelLayer from "../model/layer"

interface Props {
    layer: ModelLayer;
}

export default function LayerViewController(props: Props) {
    const layer = props.layer;

    const [entities, setEntities] = useState([] as Entity[]);
    
    layer.entityChanged.connect(() => {
        setEntities([...layer.getEntities()]);
        console.log("changed")
    }
        )

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
                <Label x={0} y={0} width={100} height={20} fill="brown" onClick={
                    () => {layer.addEntity(new Entity(
                        'someID',
                        'someLabel',
                        10, 20, 30, 40
                    ));
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