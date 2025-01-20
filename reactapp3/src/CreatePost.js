// src/CreatePost.js
import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = { title, content, author };

        fetch('http://localhost/backend reactapp3/createPost.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
        .then(response => {
            if (response.ok) {
                setMessage("Post created successfully!");
                // Clear input fields
                setTitle('');
                setContent('');
                setAuthor('');
            } else {
                setMessage("Failed to create post.");
            }
        })
        .catch(error => {
            setMessage("An error occurred: " + error.message);
        });
    };

    return (
        <div className="create-post-container">
            <form onSubmit={handleSubmit} className="create-post-form">
                <h2>Create Post</h2>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                    className="form-input"
                />
                <textarea 
                    placeholder="Content" 
                    value={content} 
                    onChange={(e) => setContent(e.target.value)} 
                    required 
                    className="form-textarea"
                />
                <input 
                    type="text" 
                    placeholder="Author" 
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)} 
                    required 
                    className="form-input"
                />
                <button type="submit" className="submit-button">Submit</button>
            </form>
            {message && <p className="message">{message}</p>} {/* Display message */}
        </div>
    );
};

export default CreatePost;