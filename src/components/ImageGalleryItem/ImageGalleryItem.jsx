import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {

  handleClick = () => {

  }

  render() {
    const { photos } = this.props;

    return photos.map(({ webformatURL, largeImageURL, tags, id }) => (
      <li key={id} className={css.galleryItem}>
        <a key={id} href={largeImageURL}>
          <img key={id} src={webformatURL} alt={tags} />
        </a>
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
