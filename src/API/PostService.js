import axios from "axios";

export default class PostService {
    static async getAll(limit = 10, page = 1){
        const response = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${page === 1 ? 0 : (page - 1) * 15}`)
        return response
    }

    static async getById(id){
        const response = await axios.get('https://dummyjson.com/posts/' + id)
        return response
    }

    static async getComments(id){
        const response = await axios.get(`https://dummyjson.com/posts/${id}/comments`)
        return response
    }
}