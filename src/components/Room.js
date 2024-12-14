import React from 'react';
import { Box, Plane } from '@react-three/drei';

const Room = () => {
    return ( <
        > { /* Floor - Increase size */ } <
        Plane args = {
            [20, 20] }
        position = {
            [0, 0, 0] }
        rotation = {
            [-Math.PI / 2, 0, 0] } >
        <
        meshStandardMaterial color = "#a9a9a9" / >
        <
        /Plane>

        { /* Left Wall - Increase size */ } <
        Box args = {
            [0.1, 2, 20] }
        position = {
            [-10, 1, 0] } >
        <
        meshStandardMaterial color = "#cccccc" / >
        <
        /Box>

        { /* Right Wall - Increase size */ } <
        Box args = {
            [0.1, 2, 20] }
        position = {
            [10, 1, 0] } >
        <
        meshStandardMaterial color = "#cccccc" / >
        <
        /Box>

        { /* Back Wall - Increase size */ } <
        Box args = {
            [20, 2, 0.1] }
        position = {
            [0, 1, -10] } >
        <
        meshStandardMaterial color = "#cccccc" / >
        <
        /Box> <
        />
    );
};

export default Room;