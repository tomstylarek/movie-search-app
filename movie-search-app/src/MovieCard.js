import React, { useState, useEffect } from 'react'

function MovieCard(props) {

    return (
        <div className="movie-card">
            <img className="movie-card__img" src={props.image} alt={props.title}/>
            <div className="movie-card-content">
                <h4 className="movie-card__title">{props.title}</h4>
                <p className="movie-card__description">{props.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard
