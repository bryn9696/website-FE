import './WorkExperience.css'; // Adjust the path if necessary
import React, { useEffect, useState } from 'react';

const WorkExperience = () => {
    const [workExperience, setWorkExperience] = useState([]);
    const [error, setError] = useState(null); // State to hold error messages

    useEffect(() => {
        const fetchWorkExperience = async () => {
            try {
                const response = await fetch('https://bryn-cv-backend-bf2aa1ebc082.herokuapp.com/api/workExperience');
                
                // Check if the response is okay (status in the range 200-299)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                
                const data = await response.json();

                // Check if data is an array
                if (Array.isArray(data)) {
                    setWorkExperience(data);
                } else {
                    throw new Error('Expected an array of work experiences');
                }
            } catch (error) {
                console.error('Error fetching work experience:', error);
                setError(error.message); // Set the error message state
            }
        };

        fetchWorkExperience();
    }, []);

    return (
        <div className="work-experience-container">
            <h2>Work Experience</h2>
            {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
            <ul>
                {workExperience.map((experience, index) => (
                    <li key={index}>
                        <h3>{experience.jobTitle} at {experience.company}</h3>
                        <p>{experience.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorkExperience;
