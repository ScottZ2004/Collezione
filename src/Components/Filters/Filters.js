import React from "react";
import "./Filters.css";

const Filters = () => {
    return(
        <header className="filters">
            <h1 className="filter__header">Sorteren op:</h1>
            <button className="filter">Stalen achtbaan</button>
            <button className="filter">Houten achtbaan</button>
            <button className="filter">Water attractie</button>
        </header>
    )
}
export default Filters;