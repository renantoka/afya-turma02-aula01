import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postform = axios.create({
    baseURL: 'https://webhook.site/e0f9639d-d377-4325-9bd5-99e7b6b21438'
})

export default api;