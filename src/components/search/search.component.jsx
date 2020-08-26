import React from 'react';
import './search.style.css';

const Search = (props) => {
    return (
        <div className="search">
            <input type="search" placeholder={props.placeholder} onChange={(event) => props.handleSearchChange(event.target.value)}>
            </input>
        </div>
    )
}

export default Search;