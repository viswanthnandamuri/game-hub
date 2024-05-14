import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        
        key:'9ed535638b054bd0a5f21f7f83f3f2c5',
    }
})