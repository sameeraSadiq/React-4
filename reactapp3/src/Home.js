

// src/Home.js
import React, { useEffect, useState } from 'react';
import './Home.css'; // Ensure you have the corresponding CSS styles

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 4;

    useEffect(() => {
        fetch('http://localhost/backend reactapp3/getPosts.php')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    // Calculate the index of the last post on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    // Calculate the index of the first post on the current page
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // Get the current posts
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total number of pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    return (
        <div className="container">
            <h2>Posts</h2>
            <div className="posts-grid">
                {currentPosts.map((post) => (
                    <div className="card" key={post.id}>
                        <h3>{post.title}</h3>
                        <p className="author-date">by {post.author} on {post.date}</p>
                        <a className="read-more" href={`/posts/${post.id}`}>Read More</a>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <button 
                    className="prev-next" 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        onClick={() => paginate(index + 1)} 
                        className={`page-number ${currentPage === index + 1 ? 'active' : ''}`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button 
                    className="prev-next" 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;