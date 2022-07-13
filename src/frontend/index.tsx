import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

const container = document.getElementById('app-root');

const root = createRoot(container!);
root.render(
    <App />
    /*<Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer draggable={true}>
        <Rect width={200} height={200} fill="red"  />
        <Circle x={200} y={200} stroke="black" radius={50} />
        <Text width={200} height={200} text="Hi" align="center" verticalAlign="middle" fontSize={20} />
      </Layer>
    </Stage>*/
);