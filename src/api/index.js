import axios from 'axios';

const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getWeather = async (value) => {
  try {
    const response = await apiClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=ddbb511beaff970a91590ec93264db74&units=metric&lang=ua`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


export default apiClient;