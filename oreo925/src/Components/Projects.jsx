import React from 'react';
import './styles.css';

function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div>
                <h3>Disruptive AI (Real-time Chatbot, AI-based)</h3>
                <p>Participated in the development and testing of an AI-based real-time chatbot, focusing on enhancing user interaction and efficiency.</p>
            </div>
            <div>
                <h3>React.js Based Real Estate Website (Daardoor) for Iran</h3>
                <p>Managed and contributed to the development of a React.js based real estate website, ensuring a user-friendly interface and efficient performance.</p>
            </div>
            <div>
                <h3>Modula Application for Car Dealership in Dubai</h3>
                <p>Involved in the creation of a modular application using AI and machine learning to generate 3D models of cars, enhancing the car dealership's digital presence and customer engagement.</p>
            </div>
            {/* Add other projects as needed */}
        </section>
    );
}

export default Projects;
