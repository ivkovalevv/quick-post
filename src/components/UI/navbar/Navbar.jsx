import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) =>{
    const themeHandler = () => {
      props.theme ? props.themeHandler(false) : props.themeHandler(true);
    }

    return(
        <div className="navbar">
        <div className="navbar__links">
          <Link className="navbar__link" to="/about">About</Link>
          <Link className="navbar__link" to="/posts">Posts</Link>
          <button className="color-theme-button" onClick={() => themeHandler()}>C</button>
        </div>
      </div>
    )
}

export default Navbar