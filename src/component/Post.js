import React, { useEffect } from 'react';
import { useState } from 'react';
import Avatar from '../img/avatar.png'
import '../css/post.css'
import { Link } from 'react-router-dom';

const Post = ( {id}) => {
  const [data, setData] = useState([]);
  const [user, setUser]= useState([]);

useEffect(()=>{
  loadData();
},[ ]);

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json())
  .then(user => setUser(user));
  console.log(data);
},[])

const loadData=()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then((response) => response.json())
  .then(data => setData(data));
}

    return (
        <>
            <Link to='/' style={{
              color: 'white'
            }} >
            <article class="card" onClick={(e)=>{
              
              
            }}>
        <header className="card-header">
          <h2>{data.title}</h2>
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
            <div className="author-name-prefix">{user.name}</div>
            {user.email}
          </div>
        </div>
        <div className="tags">
          <a href="/blog">html</a>
          <a href="/blog">css</a>
        </div>
      </article>
      </Link>
        </>
    )
}

export default Post
