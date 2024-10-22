import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';
const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = { title, content, author };
        await axios.post('http://localhost:5000/api/posts', newPost);
        navigate('/'); // Redirect to home page after successful post creation
    };

    return (
        <div>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div>
                    <label>Author</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;
