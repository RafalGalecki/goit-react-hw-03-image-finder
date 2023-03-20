import { Component } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const { totalPages, loadMore } = this.props;
    return (
      <button type='button' value={totalPages} className={css.btn} onClick={loadMore}>Load more</button> 
    );
  }
}

Button.propTypes = {
  loadMore: PropTypes.func,
  totalPages: PropTypes.number,
};

export default Button;
