import React from 'react';
import '../css/homehero.css'
import laptop from '../img/Heropix.svg'

function HomeHero() {
    return (
        <>
        <div className="HomeHerocontainer">
            <div className="textbox">
                <h2 className="title-text">All the right moves,
In all the right places.</h2>
                <button className="herobutton" href='#'>Subscribe to the newsletter</button>

            </div>
            <div className="imgbox">
                <div className="laptopbox">
                    <img className="laptop" src={laptop} alt="" srcset="" />
                </div>
            </div>
        </div>

            
        </>
    )
}

export default HomeHero;
