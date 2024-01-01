import React from 'react';
import './styles.css';
function Education() {
    return (
        <section className="education">
            <h2>Education</h2>
            <div>
                <h3>Bachelors of Science in Software Engineering - UET Taxila</h3>
                <p>CGPA - 3.38 (2020 - Present)</p>
            </div>
            <div>
                <h3>Intermediate in Computer Science (ICs) - APS Fort Rd Rawalpindi</h3>
                <p>Passed in 1st Division (2018-2020)</p>
            </div>
            {/* Add other education details as needed */}
        </section>
    );
}

export default Education;
