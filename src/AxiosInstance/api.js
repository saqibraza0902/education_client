import axios from 'axios'

const api = axios.create({
    baseURL: "https://educationserver.vercel.app"
})

export default api