import React from 'react';
import TypingEffect from "./TypingEffect";

const HeroSection =()=>{
    return(
        <section className="hero-section" id="home" data-aos="fade-up">
            <h1>Welcome to my Portfolio</h1>
            <h2>
                I am <TypingEffect text=" Nitin Modanwal , a Web Developer"/>
            </h2>
        </section>
    );
};

export default HeroSection;