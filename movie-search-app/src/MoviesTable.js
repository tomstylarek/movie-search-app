import React from 'react'
import MovieCard from './MovieCard'

function MoviesTable(props) {
    const posterPath = "https://image.tmdb.org/t/p/w500"
    const movieComponents = props.moviesData.map(movie => {
        return (
            <MovieCard
                key={movie.id}
                title={movie.title}
                image={posterPath + movie.poster_path}
                overview={movie.overview}
            />
        )
    })

    return (
        <div className="movies-table">
            {movieComponents}
        </div>
    )
}

export default MoviesTable
