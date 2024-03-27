import axios from "axios"
import settings from "@/config.json"
const api = axios.create({
    // baseURL: 'https://apiv4.ordering.co/',
    baseURL: settings.api_url,
    headers: { "Content-type": "application/json" }
});

export default api
