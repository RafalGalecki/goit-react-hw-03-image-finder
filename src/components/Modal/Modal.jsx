import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    const { largePhoto } = this.props;
    return (
      <div className={css.backdrop}>
        <div className={css.modal}>
          <img src={largePhoto} alt='' />
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
