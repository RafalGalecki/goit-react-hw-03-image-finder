import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32900426-a12efdc1668c6b000f20a1416';
const PER_PAGE = 12;
let query = 'cat';
let page = 1;

export class App extends Component {
  state = {
    photos: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const response = await axios.get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
      );

      this.setState({ photos: response.data.hits });
      console.log('response', response.data.hits);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  a = () => {
    console.log('PHOTOS:', this.state.photos)
  }
  render() {
    const { isLoading, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {error ? <p>'Whoops, something went wrong: {error.message}</p> : null}
        {isLoading ? (
          <Loader title="Loading..." />
        ) : (
          <ImageGallery photos={this.state.photos}>
            <ImageGalleryItem photos={this.state.photos} />
            <Button />
          </ImageGallery>
        )}
        <Modal />
        <p>{this.a()}</p>
      </div>
    );
  }
}
