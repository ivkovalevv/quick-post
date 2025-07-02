import React from "react";

const About = () =>{
    return (
        <div className="page-wrapper">
            <h1 className="about-title">
                This application was created in 2023 as part of the study of the React library and its class components.
                <br></br>
            </h1>
            <h3 className="about-description">It's SPA application for working with posts: loading from API, creating, sorting and searching.</h3>
            <h3 className="about-description" style={{marginTop: "25px"}}>Redesigned in 2025.</h3>
        </div>
    )
}

export default About
