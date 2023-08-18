import { IPost, IBlog2 } from "../interfaces/types";
import axios from "./axios";

const Post = {
    all(){
        return axios.get<IPost[]>('/')
    },
    create(data:IBlog2){
        return axios.post('/', data)
    },
    put(data: IBlog2, id: number){
        return axios.put(`/edit/${id}/`, data)
    },
    delete(id:number){
        return axios.delete(`/${id}/`)
    },
    getOne(id:number){
        return axios.get(`/${id}/`)
    }
}

export default Post