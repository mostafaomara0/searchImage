import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID oeFwJmfPIprJ_8V6CApvmjH5YEMx9WCSjFjan_Kun7c',
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response.data.results;
};

export default searchImages;
