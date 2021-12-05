import axios from "axios";

const wookie = axios.create({
    baseURL: 'https://wookie.codesubmit.io/',
    headers: { 'Authorization': 'Bearer Wookie2021' }
})

export const moviesApi = wookie.get('movies')