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
            {/*<div className="card-content">
                <span style={{ fontSize: "20px", textDecoration: "underline" }}><strong>{props.movie.title}</strong></span><br/>
                <strong>Released: </strong> {props.movie.release_date} <br />
                <strong>Popularity: </strong> {props.movie.popularity}
                <p style={{ fontStyle: "italic" }}>{props.movie.overview}</p>
    </div>*/}
        </div>
    </div>
                    
    )
};

export default Movie;