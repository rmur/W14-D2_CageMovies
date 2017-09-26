import React, {Component} from 'react';

const FilmDetails = (props) => {
  
  if(!props.film){
    return null;
  }

    return (
      <section>
        <h3>Title: {props.film.show_title}</h3>
        <h4>Rating: {props.film.rating} / 5</h4>
        <img src={props.film.poster}/>
        <p>Summary: {props.film.summary}</p>
      </section>
    );
  
}

export default FilmDetails;
