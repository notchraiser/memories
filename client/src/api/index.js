import axios from "axios";

const url = "http://localhost:5000/memories";

export const fetchMemories = () => axios.get(url);
export const createMemory = (newMemory) => axios.post(url, newMemory);