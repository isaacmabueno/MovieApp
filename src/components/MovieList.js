import React from 'react'
import Movie from './Movie'



const MovieList = (props) => {
    return(
    <div className="container">
        <div className="row header">
            <div className="col s12 item">
            {
                props.movies.map((movie, i) => {
                    return (
                        <Movie key={i} image={movie.poster_path} description={movie.overview} title={movie.original_title} />
                    )
                })
            }
            </div>
        </div>
    </div>
    )}

export default MovieList;