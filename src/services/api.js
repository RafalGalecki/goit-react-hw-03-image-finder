import axios from "axios";

const URL = 'https://pixabay.com/api/';
const API_KEY = '32900426-a12efdc1668c6b000f20a1416';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const PER_PAGE = 12;

const fetchPhotosWithQuery = async (query, page) => {
    const response = await axios({
        method: 'get',
        url: URL,
        params: {
            q: query,
            page: page,
            key: API_KEY,
            image_type: IMAGE_TYPE,
            orientation: ORIENTATION,
            per_page: PER_PAGE,

        }
    });
    console.log('response.data.hits', response.data.hits)
  return response.data.hits;
};



export { fetchPhotosWithQuery };
