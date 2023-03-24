import { Component } from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    return (
      <Circles
        height="45vh"
        width="45vw"
        color=" #2196f3"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass={css.spinner}
        visible={true}
      />
    );
  }
}

Loader.propTypes = {
  title: PropTypes.string,
};

export default Loader;
