import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Room from './Room';
import DraggableFurniture from './DraggableFurniture';

const DesignCanvas = () => {
    const [furniture, setFurniture] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const addFurniture = (modelPath) => {
        const newFurniture = {
            modelPath,
            position: [Math.random() * 8 - 4, 0, Math.random() * 8 - 4],
            scale: 1,
        };
        setFurniture([...furniture, newFurniture]);
    };

    const handleDrag = (index) => (offset) => {
        const newFurniture = [...furniture];
        newFurniture[index].position[0] += offset[0] * 0.1;
        newFurniture[index].position[2] -= offset[1] * 0.1;
        setFurniture(newFurniture);
    };

    const handleResize = (scale) => {
        if (selectedIndex !== null) {
            const newFurniture = [...furniture];
            newFurniture[selectedIndex].scale *= scale;
            setFurniture(newFurniture);
        }
    };

    const handleSelect = (index) => {
        setSelectedIndex(index);
    };

    return ( <
        div > { /* Button Controls */ } <
        div style = {
            { marginBottom: '20px' }
        } >
        <
        button onClick = {
            () => addFurniture('/models/chair.glb')
        } > Add Chair < /button> <
        button onClick = {
            () => addFurniture('/models/bed.glb')
        } > Add Bed < /button> <
        button onClick = {
            () => addFurniture('/models/low_poly_bookshelf.glb')
        } > Add Bookshelf < /button> <
        button onClick = {
            () => addFurniture('/models/nightstand.glb')
        } > Add Nightstand < /button> <
        button onClick = {
            () => addFurniture('/models/sofa.glb')
        } > Add Sofa < /button>   < /div > { /* Design Canvas */ } <
        Canvas camera = {
            { position: [0, 10, 20], fov: 50 }
        } >
        <
        ambientLight / >
        <
        pointLight position = {
            [10, 10, 10]
        }
        /> <
        Room / > {
            furniture.map((item, index) => ( <
                DraggableFurniture key = { index }
                modelPath = { item.modelPath }
                position = { item.position }
                scale = { item.scale }
                onDrag = { handleDrag(index) }
                onSelect = {
                    () => handleSelect(index)
                }
                />
            ))
        } <
        OrbitControls / >
        <
        /Canvas> < /
        div >
    );
};

export default DesignCanvas;