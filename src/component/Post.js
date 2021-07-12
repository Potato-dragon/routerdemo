import React from 'react';
import Avatar from '../img/avatar.png'
import '../css/post.css'

const Post = () => {
    return (
        <div>
            <article class="card">
        <header class="card-header">
          <p>Sep 11th 2020</p>
          <h2>Card Tricks are fun!</h2>
        </header>

        <div class="card-author">
          <a class="author-avatar" href=" #">
            <img src={Avatar} alt='sorry 🤷‍♂️' />
          </a>
          <svg class="half-circle" viewBox="0 0 106 57">
            <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
          </svg>

          <div class="author-name">
            <div class="author-name-prefix">Pirate</div>
            William Kidd
          </div>
        </div>
        <div class="tags">
          <a href="#">html</a>
          <a href="#">css</a>
        </div>
      </article>
        </div>
    )
}

export default Post
