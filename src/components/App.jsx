import { Component } from 'react';
//import axios from 'axios';
import { fetchPhotosWithQuery } from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

const INITIAL_STATE = {
  photos: [],
  query: 'rainbow',
  page: 1,
  totalHits: 0,
  pagesPerPages: 1,
  isLoading: false,
  error: false,
};

export class App extends Component {
  state = { ...INITIAL_STATE };

  async componentDidMount() {
    await this.getInitialData();
  }

  getInitialData = async () => {
    try {
      this.setState({ isLoading: true });
      const photos = await fetchPhotosWithQuery(
        this.state.query,
        this.state.page
      );
      this.setState.state({ photos });
    } catch (error) {
      console.log('error');
      this.setState({ error });
    } finally {
      console.log('finally & state.query', this.state.query, this.state.photos);
      this.setState({ isLoading: false });
    }
  };
  render() {
    const { photos, isLoading, error } =
      this.state;
    return (
      <div>
        <Searchbar />
        {error && (
          <p
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 40,
              color: '#010101',
            }}
          >
            Something went wrong
          </p>
        )}
        {isLoading && <p>Loading...</p>}

        <ImageGallery>
          <ImageGalleryItem photos={photos} />
        </ImageGallery>
        <Button />
        <Modal />
      </div>
    );
  }
}
