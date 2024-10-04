import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Projects.css'; // Import the CSS file for styling

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const API_URL = 'https://bryn-cv-backend-bf2aa1ebc082.herokuapp.com';

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/projects`);
                console.log('Projects:', response.data);
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="projects">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                        <div
                            className="project-image"
                            style={{ backgroundImage: `url(${API_URL}/images/${project.imageUrl})` }} // Fixed typo: `imageUrl` instead of `imageurl`
                        >
                            <div className="project-text">

                                {/* <h3>{project.name}</h3> */}
                                <p>{project.name}: {project.description}</p>
                            </div>
                        </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
