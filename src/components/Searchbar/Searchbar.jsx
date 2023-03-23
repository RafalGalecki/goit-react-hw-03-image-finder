import { Component } from 'react';
import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const INITIAL_VALUE = {
  inputQuery: '',
}

class Searchbar extends Component {
  state = {
    ...INITIAL_VALUE,
  };

  handleChange = event => {
    const inputQuery = event.currentTarget.value;
    this.setState({ inputQuery });
  };

  // Wywoływany jest podczas wysyłania formularza
  handleSubmit = evt => {
    evt.preventDefault();
    const { inputQuery } = this.state;
    
    this.props.searchPhotos(inputQuery)
    //onst { updateQuery } = this.props;
    // Props, który przekazywany jest do formularza do wywołania podczas jego wysyłania
    //this.props.onSubmit({ ...this.state });
  };

  render() {
    const { inputQuery } = this.state;


    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.btn + ' ' + css.search__btn}>
            <span className={css.buttonLabel}>Search</span>
          </button>

          <input
            className={css.input}
            name="inputQuery"
            value={inputQuery}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  searchPhotos: PropTypes.func.isRequired,
};

export default Searchbar;
