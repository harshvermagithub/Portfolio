import React from 'react';
import Hero from './Hero';
import Work from './Work';
import Experience from './Experience';
import About from './About';
import Certifications from './Certifications';
import Stack from './Stack';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <Work />
            <Experience />
            <About />
            <Certifications />
            <Stack />
            <Contact />
        </main>
    );
};

export default Home;
