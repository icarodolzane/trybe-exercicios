
import React, { Component } from 'react';
import SelectInput from './SelectInput';
import TextArea from './TextArea';

class Form extends Component{
  constructor(){
    super();
    this.state = {
      username: '',
      email:'',
      profession:'',
      about: ''
      
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const { username, email, profession, about } = this.state;

    return (
      <form>
        <fieldset>
        <legend>Informações pessoais</legend>
          <label htmlFor='name'>
            Name:
            <input 
              id="username"
              name="username" 
              type="text" 
              value={ username } 
              onChange={this.handleChange} />
          </label>
          <label htmlFor='email'>
            Email:
            <input 
              id='email'
              name='email' 
              type="email" 
              value={email} 
              onChange={this.handleChange} />
          </label>
          <label htmlFor="">
          < SelectInput profession={profession} handleChange={this.handleChange} />
          </label>
        </fieldset>
        < TextArea value={about} handleChange={this.handleChange} />
    </form>
    )
  }
}

export default Form;