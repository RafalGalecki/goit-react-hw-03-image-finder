import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <header className={css.searchbar}>
        <form className={css.form}>
          <button type="submit" className={css.btn + ' ' + css.search__btn} onSubmit={onSubmit}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
