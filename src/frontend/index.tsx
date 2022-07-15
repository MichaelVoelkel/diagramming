import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

import { Stage, Layer, Rect, Circle, Text } from 'react-konva';

const container = document.getElementById('app-root');

const root = createRoot(container!);
root.render(
    <App />
);