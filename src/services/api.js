import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getBio = async () => {
  const response = await axios.get(`${API_URL}/bio`);
  return response.data;
};

export const getLanguages = async () => {
  const response = await axios.get(`${API_URL}/languages`);
  return response.data;
};

export const getProjects = async () => {
  const response = await axios.get(`${API_URL}/projects`);
  return response.data;
};

export const submitContactForm = async (form) => {
  const response = await axios.post(`${API_URL}/contact`, form);
  return response;
};
