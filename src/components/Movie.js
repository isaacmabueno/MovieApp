import React from 'react';
import '../App.css'

const Movie = (props) => {
    return (  
        <div className="row new">
            <div className="col s12 m6 l3">
                <div className="card">
                    <div className="card-image">
                        <img alt={props.movie.poster_path} src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}/>
                        
                    </div>
                </div>                  
            </div>
            <div className="col s12 m6 l9 movie-info-area">
                <h1>{props.movie.title}</h1>
                <span>{props.movie.release_date}</span>
                <p>{props.movie.overview}</p>
                <p>Voter Average: {props.movie.vote_average}</p>
            </div>
        </div>
    )
};

export default Movie;