import axios from 'axios';

export default class HttpClient {
    async get(url: string) {
        const { data, status } = await axios.get(url)
        return { data, status }
    }

    async post(url: string) {
        const { data, status } = await axios.post(url)
        return { data, status }
    }
}