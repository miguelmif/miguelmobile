import axios from "axios";

const api =  axios.create({
    baseURL: "https://laravelweb2022.herokuapp.com/api",
    headers: {
        Accet: 'application/json',
    }
})

export default api;