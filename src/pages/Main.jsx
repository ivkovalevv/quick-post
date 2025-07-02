import React from "react";

const Main = () =>{
    return (
        <div className="page-wrapper">
            <h1 className="about-title">
                Welcome to <span className="about-title-special">Quick Post!</span>
            </h1>
            <h3 className="main-title">
                Quick Post is a sleek SPA for managing posts. 
            </h3>
            <h3 className="main-title">
                Here’s what you can do:
            </h3>
            <ul className="main-list">
                <li className="main-list-item">Fetch posts from DummyJSON API;</li>
                <li className="main-list-item">Search by title or content;</li>
                <li className="main-list-item">Sort by name or description;</li>
                <li className="main-list-item">Add or delete posts;</li>
                <li className="main-list-item">Explore posts in detail.</li>
            </ul>
            <div className="main-active-wrapper">
                <p className="main-active-description">Click the button below to get started!</p>
                <button>Get started</button>
            </div>
        </div>
    )
}

export default Main
