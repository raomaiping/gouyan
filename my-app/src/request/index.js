import 'whatwg-fetch'

export function get(url, params = {}){
    return new Promise((resolve,reject)=>{
        //发送get请求
        let paramStr = '';
        Object.entries(params).forEach(([key, value], index)=>{
            paramStr += index === 0 ? '' : '&';
            value = encodeURIComponent(value);
            paramStr += `${key}=${value}`;
        });
        fetch(`${url}?${paramStr}`,{
            method:'GET'
        })
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            resolve(data)
          
        })
        .catch(error=>{
            console.log(error);
        })
    });
}

export function post(url, params = {}){
    return new Promise((resolve,reject)=>{
                //发送post请求
        fetch(url, {
            method: 'POST',
            body: params
        })
        .then(response=>{
            return response.json()
        })
        .then(data=>{
            resolve(data)
            
        })
        .catch(error=>{
            console.log(error);
        })
    })
   
}

export default {
    get,
    post
}