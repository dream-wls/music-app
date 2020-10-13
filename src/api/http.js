import axios from 'axios'
import {HOST} from './url'

class http {
    constructor(base_url) {
        this.base_url = base_url;
    }
    //统一封装请求
    request(url, method = 'GET', data = {}){
        let options = {
            url,
            method,
            baseURL: this.base_url
        };
        if(method == 'GET') {
            options = {
                ...options,
                params: data
            }
        }
        else if(method == 'POST') {
            options = {
                ...options,
                data
            }
        }
        //在这个地方进行请求 这里创建请求
        const instance = axios.create();
        //我们在这里发送请求
        return instance.request(options);
    }
    //这里是get post请求 调用上面封装的request函数
    get(url, data= {}) {
        //这个地方要返回一个请求对象
        return this.request(url,'GET', data);
    }

    post(url, data= {}) {
        return this.request(url,'POST', data);

    }
}

export default new http(HOST);