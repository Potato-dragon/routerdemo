import React from 'react'
import Hero from '../component/Hero';
import Post from '../component/Post';
import '../css/blog.css';


function Blog() {

    return (
        <div className="container">
            <Hero />
        <div className='card-list'>
            <Post id='1'></Post>
            <Post id='2'></Post>
            <Post id='3'></Post>
            <Post id='4'></Post>
            <Post id='5'></Post>
            
        </div>
        </div>
    )
}


export default Blog;
