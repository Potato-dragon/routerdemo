import React, { useEffect } from 'react'
import AboutHero from '../component/AboutHero';
import '../css/about.css'
import dp from '../img/dp1.jpg'
import docker from '../img/Docker.png'
import figma from '../img/Figma-logo.svg'
import firebase from '../img/Firebase.png'
import gatsby from '../img/Gatsby.png'
import Graphql from '../img/Graphql.png'
import Node from '../img/Node.svg'
import webpack from '../img/Webpack.png'
import react from '../img/react.png'
import train from '../img/post1.jpg'
const About = () => {

    useEffect(() => {
        window.scroll(0,0)
        
    }, []);
    return (
        <div className='aboutcontainer'>
            <AboutHero />
            <h1 className="Aboutitle"> About the Author</h1>
            <div className="bodycontainer">
                <div className="photocontainer">
                    <img src={dp} alt="" srcset="" className="dpphoto"/>
                </div>
                <div className="textcontainer">
                    <p className="aboutme">
                    Greetings,
I am Shahreear Wadud . I am a React JS developer working on building strong PWAs for the future.
 I am very strong at writing ES6 compliant code and always try to optimize my code after the fact.
  Technologies I use include:

                    </p>
            </div>
                </div>
                <div className="texcontainer1">
                    <img src={docker} alt="" className="tex1" />
                    <img src={figma} alt="" className="tex1" />
                    <img src={firebase} alt="" className="tex1" />
                    <img src={Node} alt="" className="tex1" />
                    <img src={react} alt="" className="tex1" />
                </div>
                <div className="texcontainer2">
                    <div className="filler"></div>
                    <img src={gatsby} alt="" className="tex2" />
                    <img src={Graphql} alt="" className="tex2" />
                    <img src={webpack} alt="" className="tex2" />
                    <div className="filler"></div>
                </div>
                <div className="sec2">
                    <div className="txtcontainer2">
                        <h1 className="intro">Open Up a New World </h1>
                        <p className="into">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Quisquam esse illo incidunt impedit dolore modi suscipit eum, doloribus ratione
                          iusto obcaecati sed placeat non rerum dolorum quae eligendi, consectetur saepe
                           ea voluptates expedita! Nam quisquam doloremque tempore. Fugiat sint sed soluta
                            enim dolore quaerat assumenda dicta, consequatur earum officia temporibus.</p>
                    </div>
                    <div className="pixcontainer2">
                        <img src={train} alt="" className="train" />
                    </div>
                </div>
                <div className="lastparacontainer">

                <p className="lastpara">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Repellendus dicta praesentium in? Nobis rerum minus neque ab maxime laborum suscipit reiciendis temporibus,
                  quae unde aperiam nemo, itaque sed qui nostrum iste eveniet similique vitae fugit saepe. Ducimus non aspernatur,
                   itaque excepturi et fugiat. Laborum, nisi mollitia sed culpa nulla labore odio amet animi fuga eius facere molestiae 
                   pariatur omnis aperiam voluptate quod ab officiis voluptates ipsum. Sapiente sunt aperiam non impedit corrupti quaerat,
                    magnam aliquam voluptas facilis animi provident totam repellendus vitae, quam a ad enim veritatis. Voluptate, quasi dolore,
                     corporis qui incidunt et repellendus atque repudiandae, natus consequuntur quod!</p>

                </div>
            
        </div>
    )
}

export default About;
