// /src/components/Album.js
import React from 'react';
import './Album.css';

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <section className='album-frame'>
        <img className='album-image' src={ album.image } alt={ album.title } />
        <section className='album-info'>
          <h2>{ album.title }</h2>
          <p>Ano { album.releaseDate.year }</p>
          <p>
          Lançamento: 
          { `${ album.releaseDate.day }/${ album.releaseDate.month }/${ album.releaseDate.year }` }
          </p>
          <p>Gravadora: { album.others.recordCompany }</p>
          <p>Formatos: { album.others.formats }</p>
        </section>
      </section>
    );
  }
}

export default Album;