import React from "react";
import "./Filters.css";
import {useContext} from "react";
import CollectionContext from "../../Context/CollectionContext";

const Filters = () => {
    const {activeFilter, onFilterButtonClicked} = useContext(CollectionContext);

    const capitalizeFirstLowercaseRest = str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };

    const filters = [
        {
            id: "ALLES",
            title: "Alles"
        },
        {
            id: "STAAL",
            title: "Stalen achtbaan"
        },
        {
            id: "HOUT",
            title: "Houten achtbaan"
        },
        {
            id: "WATER",
            title: "Water attractie"
        }
    
    ];

    const filtersToBeRendered = filters.map(filter => {
        if(filter.id !== activeFilter){
            return <button key={filter.id} onClick={onFilterButtonClicked} id={filter.id} className="filter">{filter.title}</button>
        }
    });

    return(
        <header className="filters">
            <h1 className="filter__header">Sorteren op: {capitalizeFirstLowercaseRest(activeFilter)}</h1>
            {filtersToBeRendered}
        </header>
    )
}
export default Filters;