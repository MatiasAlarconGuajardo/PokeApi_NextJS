import axios from "axios"

const BASE_URL=`//localhost:8000/api/pokemon/`

export const instance = axios.create({
    baseURL:BASE_URL
});