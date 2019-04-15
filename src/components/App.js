import React, { Component } from "react";
import Nav from './Nav';
import Movie from "./Movie.js";

const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
const language = "&language=en-US";
const query = "&query=";

class App extends Component {
    state = {
      movies: [],
      total_pages: null,
      page_num: 1,
      query: null
    };

  fetchMovies(search) {
    fetch(URL + `${API_KEY}` + language + query + search + "&page=" + this.state.page_num)
      .then(res => res.json())
      .then(json => this.setState({ movies: json.results, total_pages: json.total_pages }));
  }

  filterSearch = event => {
    let term = event.target.value;
    this.setState({
      query: term
    }, () => this.fetchMovies(this.state.query))
  };

  nextPage = () => {
    if(this.state.movies && this.state.page_num < this.state.total_pages) {
      this.setState({
        page_num: this.state.page_num +=1
      }, () => this.fetchMovies(this.state.query))
    }
  }

  previousPage = () => {
    if(this.state.movies && this.state.page_num !== 1) {
      this.setState({
        page_num: this.state.page_num -=1
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
            <button onClick={this.previousPage}style={{marginLeft: "28%"}}>Previous Page</button>
            <button onClick={this.nextPage}style={{marginLeft: "0%"}}>Next Page >></button>
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
