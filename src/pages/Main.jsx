import React from "react";

const Main = () =>{
    return (
        <div className="page-wrapper">
            <h1 className="about-title">
                Welcome to Quick Post!
            </h1>
            <h3>
                Quick Post is a sleek SPA for managing posts. Here’s what you can do:
            </h3>
            <ul>
                <li>Fetch posts from DummyJSON API</li>
                <li>Search by title or content</li>
                <li>Sort by name or description</li>
                <li>Add or delete posts</li>
                <li>Explore posts in detail</li>
            </ul>
            <p>Click the button below to get started!</p>
            <button>Get started</button>
        </div>
    )
}

export default Main
