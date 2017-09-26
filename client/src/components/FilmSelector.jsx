import React, {Component} from 'react';

const FilmSelector = (props) => {

  var handleChange = function(event){
    props.handleFilmSelected(event.target.value);
  }

    const options = props.films.map((film,index) => {
      return(
          <option 
          value={index} 
          key={index}>
            {film.show_title}
          </option>
        )
    })
      

    return (
      <select id="films" onChange = {handleChange.bind(this)}>
        <option>Cage Selector</option>
        {options}
      </select>
    );

}

export default FilmSelector;