// src/components/Home.js
import React from 'react';
import Bio from './Bio';
import Languages from './Languages';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import ContactForm from './ContactForm';
import './Home.css'; // Add styles for layout

const Home = () => {
    return (
        <div className="home">
            <h1 className="title">Bryn Williams</h1>
            <Bio />
            <Projects />
            <WorkExperience />
            <Languages />
            <ContactForm />
        </div>
    );
};

export default Home;
