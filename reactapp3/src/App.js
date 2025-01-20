// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </Router>
    );
};

export default App;