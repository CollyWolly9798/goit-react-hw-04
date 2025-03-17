import axios, { Axios } from 'axios';

export const fetchGallery = async topic => {
  const response = await axios.get('https://api.unsplash.com/search/photos/', {
    params: {
      client_id: 'KCNTX5LlI2zsk6MIb-DqSU1V-VptS6-v3mxLWEHX5WI',
      query: topic,
    },
  });
  return response.data.results;
};
