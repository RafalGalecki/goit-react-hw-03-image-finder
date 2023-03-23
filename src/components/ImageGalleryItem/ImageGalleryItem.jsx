import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  handleClick = () => {};

  render() {
    const { photos } = this.props;

    return photos.map(({ webformatURL, tags, id }) => (
      <li key={id} className={css.gallery__item}>
        <img
          key={id}
          className={css.gallery__photo}
          loading="lazy"
          src={webformatURL}
          alt={tags}
        />
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  id: PropTypes.string,
};

export default ImageGalleryItem;
