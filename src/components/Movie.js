import React from 'react';
import '../App.css'

const Movie = (props) => {
    return (        
    <div className="col s12 m6 l3">
        <div className="card">
            <div className="card-image waves-effect waves-light">
                <img className="grid" alt={props.movie.poster_path} src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}/>
                <span>{props.movie.title}</span>
            </div>
        </div>                  
    </div>  

    
    )
};

export default Movie;