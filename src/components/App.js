import React, { Component } from "react";
import Nav from './Nav';
import Movie from "./Movie.js";

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

class App extends Component {
    state = {
        movies: [],
        total_pages: null,
        page_num: 1,
        query: null
    };
// {/* FETCH REQUEST query gets passed in through here */}
  fetchMovies(search) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${this.state.page_num}`)
          .then(res => res.json())
          .then(json => this.setState({ movies: json.results, total_pages: json.total_pages }));
  }
// {/* Filter function */}
  filterSearch = event => {
      let term = event.target.value;
      this.setState({
        query: term
        // {/* Calls fetchMovies function with the query that's stored in the state, essentiall what you're typing in which is a live filter */}
      }, () => this.fetchMovies(this.state.query))
  };

  nextPage = () => {
      if(this.state.movies && this.state.page_num < this.state.total_pages) {
          this.setState({
              page_num: this.setState.page_num +=1
          }, () => this.fetchMovies(this.state.query))
      }
  }

  previousPage = () => {
      if(this.state.movies && this.state.page_num !== 1) {
          this.setState({
              page_num: this.setState.page_num -=1
          }, () => this.fetchMovies(this.state.query))
      }
  }

  render() {
      return (
        <div>
          <Nav />
          <div>
            <div className="container">
               <div className="row">
                    <section className="col s4">
                        <input placeholder="Search Movie..." onChange={this.filterSearch}/>
                    </section>
                  </div>
            </div>
            <div className="container">
                <div className="row">
                    <section className="col s4">
                        <ul className="pagination">
                            <li className="waves-effect" onClick={this.previousPage}><i className="material-icons">chevron_left</i></li>
                            <li className="waves-effect" onClick={this.nextPage}><i className="material-icons">chevron_right</i></li>
                        </ul>
                    </section>
                </div>
            </div>
          </div>
          <div className="container">
              <div className="row new">
                { this.state.movies ? (this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)) : (null) }
              </div>
          </div>
        </div>
    );
  }
}

export default App;