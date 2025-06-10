import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createSentence = (sentence) => api.post('/sentences', sentence);
export const getAllSentences = () => api.get('/sentences');
export const getSentenceById = (id) => api.get(`/sentences/${id}`);
export const updateSentence = (id, sentence) =>
  api.put(`/sentences/edit/${id}`, sentence);
export const deleteSentence = (id) => api.delete(`/sentences/${id}`);
