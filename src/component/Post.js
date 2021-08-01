import React, { useEffect } from 'react';
import { useState } from 'react';
import Avatar from '../img/avatar.png'
import '../css/post.css'

const Post = ( {id}) => {
  const [data, setData] = useState([]);

useEffect(()=>{
  loadData();
},[]);

const loadData=()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then(data => setData(data));
  console.log(data);
}

    return (
        <>
            <article class="card">
        <header className="card-header">
          <div>{data.title}</div>
          <div>{data.body}</div>
         
        </header>

        <div className="card-author">
          <a className="author-avatar" href=" #">
            <img src={Avatar} alt='sorry 🤷‍♂️' />
          </a>
          <svg className="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div className="author-name">
            <div className="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div className="tags">
          <a href="/blog">html</a>
          <a href="/blog">css</a>
        </div>
      </article>
        </>
    )
}

export default Post
