// import axios from 'axios';

export default class HttpClient {
    async get(url: string) {
        const resp = await fetch(url)
        const data = await resp.json()
        return { data, status: data.status }
    }

    async post(url: string) {
        const resp = await fetch(url, {method: 'POST'})
        const data = await resp.json()
        return { data, status: data.status }
    }
}