import React from 'react';
import '../App.css'

const Movie = (props) => {
    return (  
        <div className="row new">
            <div className="col s12 m6 l4">
                <div className="card">
                    <div className="card-image">
                        <img alt={props.movie.poster_path} src={`https://image.tmdb.org/t/p/w342${props.movie.poster_path}`}/>
                        
                    </div>
                </div>                  
            </div>
            <div className="col s12 m6 l8">
                <h1>{props.movie.title}</h1><br></br>
                <span>{props.movie.overview}</span><br></br>
                <p>Voter Average: {props.movie.vote_average}</p>
            </div>
        </div>
    )
};

export default Movie;