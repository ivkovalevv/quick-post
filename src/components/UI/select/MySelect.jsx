import React from "react";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <select className="select" 
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option className="select-option" disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option className="select-option" key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default MySelect