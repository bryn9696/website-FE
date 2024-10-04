// src/components/Bio.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Bio.css';

const Bio = () => {
    const [bio, setBio] = useState(null); 
    const API_URL = 'https://bryn-cv-backend-bf2aa1ebc082.herokuapp.com';

    useEffect(() => {
        const fetchBio = async () => {
            try {
                const response = await axios.get(`${API_URL}/api/bio`);
                console.log('Bio response:', response.data); 
                setBio(response.data); 
            } catch (error) {
                console.error('Error fetching bio:', error);
            }
        };

        fetchBio(); 
    }, []);

    
    const handleDownload = () => {
        window.location.href = `${API_URL}/api/downloadCV`;
    };

    return (
        <div className="container bio">
            <h2>My Bio <i className="bi bi-clipboard2-check-fill" onClick={handleDownload} style={{ cursor: 'pointer' }} title="Download CV"></i></h2>
            <span className="icon" role="img" aria-label="Download CV">
                    <svg onClick={handleDownload} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-check-fill" viewBox="0 0 16 16">
                        <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
                        <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585q.084.236.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5q.001-.264.085-.5m6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
                    </svg>
                </span>
            <p>{bio ? bio.description : 'Loading...'}</p>
        </div>
    );
};

export default Bio;
