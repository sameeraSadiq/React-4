// src/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams(); // Get the post ID from the URL
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`http://localhost/backend reactapp3/getPost.php?id=${id}`)
            .then(response => response.json())
            .then(data => setPost(data));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-detail">
            <h2>{post.title}</h2>
            <p>{post.content}</p> {/* Assuming 'content' is a field in your post data */}
            <hr />
            <p>by {post.author} on {post.date}</p>
            <a href="/">Back to Posts</a>
        </div>
    );
};

export default PostDetail;