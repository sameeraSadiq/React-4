import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import CreatePost from './CreatePost';
import PostDetail from './PostDetail';
import Register from './Register';
import Login from './Login';
import ContactManager from './ContactManager';

const App = () => {
    const isAuthenticated = !!localStorage.getItem("userEmail"); // Check if the user is logged in

    return (
        <Router>
            <Navbar isAuthenticated={isAuthenticated} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={isAuthenticated ? <CreatePost /> : <Navigate to="/login" />} />
                <Route path="/posts/:id" element={<PostDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={isAuthenticated ? <Navigate to="/contactmanager" /> : <Login />} />
                <Route path="/contactmanager" element={isAuthenticated ? <ContactManager /> : <Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
