// src/App.js
import React from 'react';
import Album from './Album'
import {data} from './albumSrc';
import './App.css';
const albumArray = data;
// src/App.js
class App extends React.Component {
  render() {
    return (
      <main className='main'>
        {albumArray.map(element => <Album album = {element}/>)}
      </main>
    );
  }
}
export default App