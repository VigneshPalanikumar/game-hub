import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f2c38ad6bf8345e3836be9099c632899',
    }
})