import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { imageUrl, imageAlt, id } = this.props;
    return (
      <li className={css.galleryItem}>
        <img key={id} src={imageUrl} alt={imageAlt} />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  id: PropTypes.string,
};

export default ImageGalleryItem;
