import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TextArea extends Component{
  
  render() {
    const {handleChange, about} = this.props
    const MAX_ROWS = 10;
    const MAX_COLS = 50;
    return (
      <fieldset>
        <legend>Sobre você :</legend>
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={handleChange}
            rows={MAX_ROWS}
            cols={MAX_COLS}
          />
      </fieldset>
    )
  }
   
}

TextArea.propTypes = {
  about: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;