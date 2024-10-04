// src/components/Languages.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Languages.css'; // Import the CSS file for styling

const Languages = () => {
    const [languages, setLanguages] = useState({ backEnd: [], frontEnd: [] });
    const API_URL = 'https://bryn-cv-backend-bf2aa1ebc082.herokuapp.com/api';

    useEffect(() => {
        const fetchLanguages = async () => {
            try {
                const [beResponse, feResponse] = await Promise.all([
                    axios.get(`${API_URL}/BElanguages`),
                    axios.get(`${API_URL}/FElanguages`)
                ]);

                console.log('Back End Languages:', beResponse.data);
                console.log('Front End Languages:', feResponse.data);

                setLanguages({
                    backEnd: beResponse.data,
                    frontEnd: feResponse.data
                });
            } catch (error) {
                console.error('Error fetching languages:', error);
            }
        };

        fetchLanguages();
    }, []);

    return (
        <div className="languages">
            <h2>Languages</h2>
            <div className="columns">
                <div className="column">
                    <h3>Back End</h3>
                    <div className="be-language-list">
                        <ul className="language-list">
                            {languages.backEnd.length > 0 ? (
                                languages.backEnd.map((lang, index) => (
                                    <li key={index}>{lang}</li>
                                ))
                            ) : (
                                <li>Loading...</li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="column">
                    <h3>Front End</h3>
                    <div className="fe-language-list">
                        <ul className="language-list">
                            {languages.frontEnd.length > 0 ? (
                                languages.frontEnd.map((lang, index) => (
                                    <li key={index}>{lang}</li>
                                ))
                            ) : (
                                <li>Loading...</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Languages;
