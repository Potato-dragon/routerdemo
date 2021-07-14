import React from 'react';
import { useEffect } from 'react';
import Gridbox from '../component/Gridbox';

import HomeHero from '../component/HomeHero';
import '../css/home.css'
import react from '../img/react.png'
import redux from '../img/redux.png'
import wordpress from "../img/Wordpress.png";

const Home = () => {
    useEffect(() => {
        window.scroll(0,0)
        
    }, []);


    return (
        <div className='HomeContainer'>
            <HomeHero />
            <div className="socialproof">
                <div className="socbox">
                    <img src={react} alt="" className="socx" />
                   </div>
                <div className="socbox">
                    <img src={redux} alt="" className="socx2" />
                   </div>
                <div className="socbox">
                    <img src={wordpress} alt="" className="socx3" />
                    </div>
                <div className="socbox">
                    <img src={wordpress} alt="" className="socx3" />
                    </div>
            </div>
            <div className="title">
                <h2 className="titletxt">
                    The PotatoDragon Advantage
                </h2>
            </div>
            <div className="blogcontainer">
                <div className="filler1"></div>
                <div className="bitoftext">
                    <p className="txtbody">Theme UI is a library for styling React apps with user-configurable design constraints. It allows you 
                    to style any component in your application with typographic, color, and layout values defined in a shared theme object.
                     Theme UI is currently used in Gatsby’s official themes, but it can be used in any Gatsby site or React application. 
                     It includes the Emotion CSS-in-JS library along with additional utilities for styling MDX and using configurations and themes from Typography.js.

Using Theme Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil soluta ad expedita necessitatibus iste numquam 
cupiditate adipisci voluptatum, maxime itaque porro autem, veritatis repellendus recusandae earum amet exercitationem totam reiciendis impedit aliquam architecto
  obcaecati. Tempore eos repudiandae accusamus cumque id amet aut aliquid, maxime velit ratione? Saepe corrupti harum, ut vel fugit
  ecusandae culpa, adipisci autem cum molestiae consequuntur repellendus nam! Porro non at quos harum molestiae? Explicabo, qui! 
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit laborum doloribus vel autem possimus, voluptatibus amet iste 
  harum nemo iusto ullam at, fuga voluptatem aperiam fugit omnis, dicta necessitatibus! Consequatur porro facere, ipsam iusto minima 
  quaerat vero corrupti dolorum doloremque ea vel atque placeat necessitatibus. Facilis iure tempora quaerat dolore animi ex, ad, rem nemo,
   vero maiores accusantium? Accusantium suscipit modi amet fugit accusamus. Quisquam sapiente asperiores inventore odio rem consequatur iure nulla 
   dolorum debitis! Eligendi inventore quibusdam velit, corrupti illum maiores. Dolores blanditiis sint provident, fugiat minus molestias repudiandae, 
   pariatur eius a eveniet, repellat dolor corrupti dolorem facilis adipisci? Quis enim vero excepturi natus beatae quaerat omnis quisquam, labore, distinctio iusto corporis adipisci perferendis earum placeat exercitationem! Veritatis magni ea sequi vero incidunt dolores quis vitae natus officia, excepturi repellat labore, exercitationem eos in distinctio odit voluptatem qui alias recusandae dolore reprehenderit fugiat temporibus pariatur provident? Corrupti, reprehenderit?</p>

                </div>
                <div className="pictowrapper">

                <div className="pictocontainer">
                    <div className="filler1"></div>
                        <Gridbox className='post1'/>
                    <div className="filler2"></div>
                </div>
                <div className="pictocontainer2">
                    <div className="filler1"></div>
                        <Gridbox className='post1'/>
                    <div className="filler2"></div>
                </div>
                <div className="pictocontainer3">
                    <div className="filler1"></div>
                        <Gridbox className='post1'/>
                    <div className="filler2"></div>
                </div>
                </div>
            </div>

            
        </div>
    )
}

export default Home;

