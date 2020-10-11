import React, { useState } from 'react'

function SearchBar(props) {

    return (
        <form className="form">
            <input className="search" type="text" name="query" placeholder="Search for a movie" onChange={props.handleChange} />
        </form>
    )
}

export default SearchBar
