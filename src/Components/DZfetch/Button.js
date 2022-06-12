import React from "react";
import './styles.css'

export default function Button ({handleClick}) {
    return (
        <button type="button" className="Button" onClick={handleClick}>Load More</button>
    )
}