import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { photos } = this.props;
    return photos.map(({ webformatURL, tags, id }) => (
      <li key={id} className={css.galleryItem}>
        <img key={id} src={webformatURL} alt={tags} />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array,
  webformatURL: PropTypes.string,
  imageAlt: PropTypes.string,
  id: PropTypes.string,
};

export default ImageGalleryItem;
