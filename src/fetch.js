import axios from 'axios';

export default async function searchImages(input, currentPage) {
  try {
    const result = await axios.get('https://api.unsplash.com/search/photos/', {
      params: {
        client_id: 'KCNTX5LlI2zsk6MIb-DqSU1V-VptS6-v3mxLWEHX5WI',
        query: input,
        page: currentPage,
      },
    });
    return result.data.results;
  } catch {
    throw new Error('Failed to fetch images');
  }
}
