import { Component } from 'react';
//import React from 'react';
import css from './ImageGalleryItem.module.css';
//import PropTypes from 'prop-types';

//const INITIAL_SRC = { largeSrc: '' };
class ImageGalleryItem extends Component {
  //state = { ...INITIAL_SRC };


  //const ImageGalleryItem = props => {
  render() {
    const { id, webformatURL, largeImageURL, tags, showMod } = this.props;

    return (
      <li key={id} className={css.gallery__item}>
        <img
          key={id}
          name={largeImageURL}
          className={css.gallery__photo}
          loading="lazy"
          src={webformatURL}
          alt={tags}
          onClick={() => showMod(largeImageURL)}
        />
      </li>
    );
  
  }
}
// ImageGalleryItem.propTypes = {
//   photos: PropTypes.array,
//   webformatURL: PropTypes.string,
//   tags: PropTypes.string,
//   id: PropTypes.string,
// };

export default ImageGalleryItem;
