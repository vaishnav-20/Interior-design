import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Furniture = forwardRef(({ modelPath, position }, ref) => {
    const { scene, error } = useGLTF(modelPath); // Load the GLTF model

    if (error) {
        console.error('Error loading model:', error);
        return null; // or return a fallback UI
    }

    return ( <
        primitive object = { scene }
        position = { position }
        ref = { ref }
        />
    );
});

export default Furniture;