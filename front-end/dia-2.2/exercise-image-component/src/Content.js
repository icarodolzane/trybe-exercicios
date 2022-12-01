import React from 'react';

class Greeting extends React.Component {
  render() {
    const {animal, doingWhat, looksLike} = this.props
    return <h1> It's just a {looksLike} {animal} {doingWhat}!!!</h1>;
  }
}

export default Greeting;