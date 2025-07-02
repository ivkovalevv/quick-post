import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) =>{
    return (
        <input className={props.class || classes.myInput} {...props}></input>
    )
}

export default MyInput