import { Component } from 'react';
//import axios from 'axios';
import { fetchPhotosWithQuery } from 'services/api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';
import Button from './Button/Button';
import Loader from './Loader/Loader';

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// const API_KEY = '32900426-a12efdc1668c6b000f20a1416';
// const PER_PAGE = 12;
// let query = 'cat';
// let page = 1;

const INITIAL_STATE = {
  query: '',
  page: 1,
  totalHits: 0,
  allPages: 1,
  photos: [],
  isLoading: false,
};

export class App extends Component {
  state = {
    ...INITIAL_STATE,
  };

  searchPhotos = async (query, page) => {
    this.setState({ isLoading: true });
    console.log('przed fetch:', page);
    const response = await fetchPhotosWithQuery(query, page);
    if (response.totalHits > 0) {
      let photos = [];
      response.hits.forEach(photo => {
        photos.push({
          id: photo.id,
          webformatURL: photo.webformatURL,
          largeImageURL: photo.largeImageURL,
          tags: photo.tags,
        });
      });
      const prevPhotos = this.state.photos;
      if (page !== 1) {
        prevPhotos.forEach(prev => {
          photos.forEach((photo, index, array) => {
            if (prev.id === photo.id) {
              array.splice(index, 1);
            }
          });
        });
      }
      const allPages = Math.ceil(response.totalHits / response.hits.length);

      this.setState(prevState => {
        let newState = [];
        console.log('prevState', prevState);
        page > 1
          ? (newState = [...prevState.photos, ...photos])
          : (newState = [...photos]);
        return {
          query,
          totalHits: response.totalHits,
          page,
          allPages,
          photos: newState,
          isLoading: false,
        };
      });
    } else {
      this.setState({ ...INITIAL_STATE });
    }
  };
  // updateQuery = evt => {
  //   console.log(evt); // Dostępny obiekt zdarzenia w odwołaniu onClick

  //   this.setState({
  //     query: evt.target.value,
  //   });
  // };
  // query = el => {
  //   this.setState({
  //     query: el.currentTarget.value,
  //   });
  // };

  render() {
    const { query, page, photos, totalHits, allPages, isLoading, error } =
      this.state;
    console.log('query and page and allPages: ', query, page, allPages);
    console.log('photos', photos);

    return (
      <div>
        <Searchbar searchPhotos={value => this.searchPhotos(value, 1)} />
        {error ? <p>'Whoops, something went wrong: {error.message}</p> : null}
        {isLoading && <Loader title="Loading..." />}

        <ImageGallery photos={photos}>
          <ImageGalleryItem photos={photos} />
        </ImageGallery>
        {totalHits > 0 && page < allPages && page !== allPages && (
          <Button
            page={page}
            onClick={next => this.searchPhotos(query, next)}
          />
        )}
        <Modal />
      </div>
    );
  }
}
