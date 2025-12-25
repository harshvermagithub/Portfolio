import React from 'react';
import Hero from './Hero';
import Work from './Work';
import About from './About';
import Certifications from './Certifications';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Work />
            <About />
            <Certifications />
            <Contact />
        </main>
    );
};

export default Home;
