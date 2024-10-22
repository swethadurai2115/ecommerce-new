import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import axios from 'axios';
import './style.css';
const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <Link to="/create">
                <button className="create-post-btn">Create Post</button>
            </Link>

            <ul>
                {posts.map((post) => (
                    <li key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <p><em>By: {post.author}</em></p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
