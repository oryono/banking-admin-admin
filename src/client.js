import axios from 'axios'

const token = localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')).access_token : null

export default axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 1000,
    headers: {
        Authorization: `Bearer ${token ? token : null}`
    }
});