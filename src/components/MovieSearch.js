import React from 'react'

const MovieSearch = (props) => {
    return(
        <div className="container">
            <div className="row">
                <section className="col s4">
                    <form action="" onSubmit={props.handleSubmit}>
                        <div className="">
                            <input placeholder="Search Movie..." type="text" onChange={props.handleChange}></input>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default MovieSearch;