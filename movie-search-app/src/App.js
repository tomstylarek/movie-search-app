import React, { useState } from 'react'

import SearchBar from './SearchBar'
import MoviesTable from './MoviesTable'

function App() {
    const KEY = "900158290f1a3cdc92b7094c88d33a37"
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=`
    const [ movies, setMovies ] = useState([])

    function handleChange(event) {
        const query = (event.target.value !== null) ?
        event.target.value.trim().replace(/\s+/g, "+") :
        null

        if (query) {
            fetch(url + query)
            .then(response => response.json())
            .then(data => {
                setMovies(() => data.results)
            })
        }
    }

    return (
        <div className="container">
            <h1 className="title">Movie Search App</h1>
            <SearchBar handleChange={handleChange} />
            <MoviesTable moviesData={movies} />
        </div>
    )
}

export default App
