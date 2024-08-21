import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '521b663171b446b894e5339267aac647'
    }
})

