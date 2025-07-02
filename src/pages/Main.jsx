import React from "react";
import { Link } from "react-router-dom";

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
                <p className="small-description">Click the button below to get started!</p>
                <Link className="cssbuttons-io-button" to="/posts">
                    <p className="io-button-text">Get started</p>
                    <div class="icon">
                        <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                            fill="currentColor"
                        ></path>
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Main
