import axios from 'axios'

 const apiAddAniver = axios.create({
  baseURL: 'http://localhost:8081/AddAniver'
});

export default apiAddAniver