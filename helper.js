import axios from 'axios';
// https://my-json-server.typicode.com/kula124/json-placeholder

// Koristimo RESTful API
// Omogucava i dohvacanje pojedinacnih postova

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/kula124/json-placeholder',
});

//Promise: ceka se dok se promise ispuni
//Argument od get je /posts jer je to dio patha s kojeg dohvacamo blog postove
export const getPosts = async () => {
    const response = await instance.get('/posts');
    const data = response.data;
    return data;
};

export const getPostBySlug = async (slug) => {
    const response = await instance.get(`/posts?slug=${slug}`);
    const data = response.data[0];
    return data;
};
