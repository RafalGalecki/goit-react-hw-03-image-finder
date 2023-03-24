import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

//const INITIAL_SRC = { largeSrc: '' };
class ImageGalleryItem extends Component {
  //state = { ...INITIAL_SRC };

  handleClick = event => {
    const largeSrc = event.currentTarget.name;
    //this.setState({ largeSrc: event.currentTarget.name });
    console.log('click name:', largeSrc);
    //this.props.onClick(largeSrc);
  };

  render() {
    const { photos } = this.props;

    return photos.map(({ webformatURL, largeImageURL, tags, id }) => (
      <li key={id} className={css.gallery__item}>
        <img
          key={id}
          name={largeImageURL}
          className={css.gallery__photo}
          loading="lazy"
          src={webformatURL}
          alt={tags}
          onClick={this.handleClick}
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
