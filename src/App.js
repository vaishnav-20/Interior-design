import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Contact from './page/contact';
import Navbar from './Navbar';
import './App.css';

const App = () => {
    return ( <
        Router >
        <
        Navbar / >
        <
        div >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/about"
        element = { < About / > }
        /> <
        Route path = "/contact"
        element = { < Contact / > }
        /> < /
        Routes > <
        /div> < /
        Router >
    );
};

export default App;