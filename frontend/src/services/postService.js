import axios from "axios";

const API_URL = "http://localhost:5000/posts";

export const createPost = async (postData) => {
  return await axios.post(API_URL, postData);
};

export const getPostsByCategory = async (category) => {
  return await axios.get(`${API_URL}/${category}`);
};

export const likePost = async (postId) => {
  return await axios.put(`${API_URL}/like/${postId}`);
};
