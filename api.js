import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const createTicket = (ticketData, token) => axios.post(`${API_URL}/tickets/create`, ticketData, { headers: { Authorization: token } });
export const getTickets = (token) => axios.get(`${API_URL}/tickets`, { headers: { Authorization: token } });
