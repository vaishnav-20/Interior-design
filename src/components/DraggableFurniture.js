import React, { useRef } from 'react';
import { useDrag } from '@use-gesture/react';
import Furniture from './Furniture';

const DraggableFurniture = ({ modelPath, position, onDrag, onClick }) => { // Change 'on Click' to 'onClick'
    const mesh = useRef(); // Create a reference for the mesh
    const bind = useDrag((state) => {
        onDrag(state.offset);
    });

    return ( <
        group ref = { mesh } {...bind() }
        onClick = { onClick } > { /* Add onClick here */ } <
        Furniture modelPath = { modelPath }
        position = { position }
        /> <
        /group>
    );
};

export default DraggableFurniture;