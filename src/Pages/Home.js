import React from 'react';
import { useEffect } from 'react';
import Hero from '../component/Hero';
import '../css/home.css'

const Home = () => {
    useEffect(() => {
        window.scroll(0,0)
        
    }, []);


    return (
        <div className='HomeContainer'>
            <Hero />
            
        </div>
    )
}

export default Home

