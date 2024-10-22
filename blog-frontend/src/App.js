import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import './style.css';
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreatePost />} />
            </Routes>
        </div>
    );
}

export default App;
