import { Component } from 'react';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { children } = this.props;

    return (
      <main className={css.galleryContainer}>
        <div className={css.gallery}>{children}</div>
      </main>
    );
  }
}

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
