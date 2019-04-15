import React from 'react';
import '../App.css'
const beginning = 'https://image.tmdb.org/t/p/original';

const Movie = (props) => {
    return (        
    <div className="col s12 m6 l3">
        <div className="card">
            <div className="card-image waves-effect waves-light">
                <img className="grid" alt={props.movie.poster_path} src={`${beginning}` + props.movie.poster_path}/>
            </div>
        </div>
    </div>             
    )
};

export default Movie;