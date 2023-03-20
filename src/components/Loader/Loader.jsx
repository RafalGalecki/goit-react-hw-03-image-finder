import { Component } from 'react';
import PropTypes from 'prop-types';

class Loader extends Component {
  render() {
    const { title } = this.props;
    return <p>{title}</p>;
  }
}

Loader.propTypes = {
  title: PropTypes.string,
};

export default Loader;
