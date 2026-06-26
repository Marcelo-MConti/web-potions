import axios from "axios";

const API_URL = "http://localhost:3001/api";

export const getPotions = () => axios.get(`${API_URL}/potions`);

export const createPotion = (data) =>
  axios.post(`${API_URL}/potions`, data);

export const deletePotion = (id) =>
  axios.delete(`${API_URL}/potions/${id}`);
