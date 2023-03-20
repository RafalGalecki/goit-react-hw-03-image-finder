import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { imageUrl, imageAlt, id } = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img key={id} src={imageUrl} alt={imageAlt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  id: PropTypes.string,
};

export default Modal;
