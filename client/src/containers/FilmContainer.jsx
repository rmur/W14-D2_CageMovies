import React, {Component} from 'react';
import FilmSelector from '../components/FilmSelector';
import FilmDetail from '../components/FilmDetails';

class FilmContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      films: [],
      selectedFilm: undefined
    };
  }

  componentDidMount(){
    const url = "https://netflixroulette.net/api/api.php?actor=Nicolas%20Cage"
    fetch(url)
    .then((response) => response.json() ) 
    .then((response) => this.setState({films: response}))
  }

  handleFilmSelected(index){
    this.setState ( {selectedFilm: this.state.films[index]} )
  }

  render(){
    return (
      <article>
        <h2>Cage Container</h2>
        <FilmSelector 
        films = {this.state.films}
        handleFilmSelected={this.handleFilmSelected.bind(this)}
        />
        <FilmDetail 
        film={this.state.selectedFilm}
        />
      </article>
    );
  }
}

export default FilmContainer;