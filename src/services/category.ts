import { ICategory } from "../interfaces/types";
import axios from "./axios";

const Category = {
    all() {
        return axios.get('/category/')
    },
    create(data: Omit<ICategory, "id">) {
        return axios.post('/category/', data)
    },
    delete(id: number) {
        return axios.delete(`/category/${id}/`)
    },
    getOne(id: number) {
        return axios.get(`/category/${id}/`)
    },
    put(data: Omit<ICategory, "id">, id: number) {
        return axios.put(`/category/${id}/`, data)
    }
}

export default Category