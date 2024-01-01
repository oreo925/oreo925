import React from 'react';
import './styles.css';
// import yourProfilePicture from './path-to-your-image.jpg'; // Uncomment and provide path to your profile picture

function Header() {
    return (
        <header className="header">
            <h1>Abdul Wahab</h1>
            <p>Software Engineer | Tech Enthusiast | Student at UET Taxila</p>
            {/* <img src={yourProfilePicture} alt="Abdul Wahab" /> */} {/* Uncomment to use profile picture */}
        </header>
    );
}

export default Header;
