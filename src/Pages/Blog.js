import React from 'react'
import Hero from '../component/Hero';
import Post from '../component/Post';
import '../css/blog.css';

function Blog() {
    return (
        <div className="container">
            <Hero />
        <div className='card-list'>
            <Post>Example</Post>
            <Post>Example</Post>
            <Post>Example</Post>
            <Post>Example</Post>
            <Post>Example</Post>
            
        </div>
        </div>
    )
}

export default Blog;
