import React from 'react'
import Hero from '../component/Hero';
import Post from '../component/Post';
import '../css/blog.css';


function Blog() {

    return (
        <div className="container">
            <Hero />
        <div className='card-list'>
            <Post id='1'>Example</Post>
            <Post id='2'>Example</Post>
            <Post id='3'>Example</Post>
            <Post id='4'>Example</Post>
            <Post id='5'>Example</Post>
            
        </div>
        </div>
    )
}


export default Blog;
