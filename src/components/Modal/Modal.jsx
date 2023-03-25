import { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleClose);
  }
  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleClose);
  }
  handleClose = event => {
    if (event.code === 'Escape') {
      return this.props.hideMod();
  }
}

  render() {
    //const { largePhoto } = this.props;
    return (
      <div className={css.backdrop} onClick={this.props.hideMod}>
        <div className={css.modal}>
          <img src={this.props.largeImg} alt="" />
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
