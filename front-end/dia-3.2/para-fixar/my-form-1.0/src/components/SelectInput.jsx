import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectInput extends Component{
  
  render() {
    const { profession, handleChange} = this.props;
    return (
      <label htmlFor='profession'>
        Profissão: 
        <select 
          id='profession' 
          name='profession'
          value={profession} 
          onChange={handleChange}>
          <option value="Estudante">Estudante</option>
          <option value="Desenvolvedor">Desenvolvedor</option>
          <option value="Empresário">Empresário</option>
          <option value="Agiota">Agiota</option>
        </select>
      </label>
    )
  }
   
}

SelectInput.propTypes = {
  profession: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default SelectInput;

