import axios from 'axios';


const instanceAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Typy':'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":"PUT, POST, DELETE"
    }
})

export default instanceAxios;