import axios from 'axios'

const apiClient = axios.create({
  // frontend can reach the backend because the frontend code gets downloaded from the container and runs in the browser, rather than in the container.
  baseURL: import.meta.env.VITE_BACKEND_URL, //http://localhost:3000'
})

export default apiClient