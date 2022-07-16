import React, { useRef, useState, RefObject } from "react";
import Konva from "konva";
import { Label, Stage, Rect, Text, Layer, Group, Transformer } from "react-konva";
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
                    entities.map((entity) => {
                        console.log(typeof Group);
                        const rect: RefObject<Konva.Rect> = useRef(null);
                        const transformer: RefObject<Konva.Transformer> = useRef(null);

                        return <Group key={entity.id} draggable={true}
                        x={entity.x} y={entity.y}
                        width={entity.width} height={entity.height}
                        onClick={_ => transformer.current?.nodes([rect.current!])}
                        onDragStart={_ => console.log("started")}
                        onDragEnd={evt => layerController.moveEntityTo(entity.id, evt.currentTarget.x(), evt.currentTarget.y())}
                        >
                        <React.Fragment>
                            <Rect ref={rect} width={entity.width} height={entity.height} fill="red" />
                            <Transformer ref={transformer} /> 
                        </React.Fragment>
                        <Text align="center" verticalAlign="middle" width={entity.width} height={entity.height} text={entity.label} /> 
                        </Group>
                    })
                }
            </Layer>
        </Stage>
        );
}