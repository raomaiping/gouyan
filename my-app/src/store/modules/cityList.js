import api from '../../request/api'
import {get} from '../../request'
import {CityList}from '../../utils/city'
//types
//设置城市列表
const CITY_LIST = 'movie/city_list';
const HOST_LIST = 'movie/hot_list';
const CITY = 'movie/city';
const CITY_INDEX = 'movie/city_index';
//初始值
const initialState = {
    cityList:[],
    hotList:[],
    city:null,
    cityIndex:null,

}

//reducer
export default (state = initialState,action)=>{
    switch (action.type) {
        case CITY_LIST:
            return {
                ...state,
                cityList:action.value
            }
        case HOST_LIST:
            return {
                ...state,
                hotList:action.value
            }
        case CITY:
            return {
                ...state,
                city:action.value
            }
        case CITY_INDEX:
            return {
                ...state,
                cityIndex:action.value
            }
        default:
            return state;
    }
}
// 同步action
// 设置城市列表
const setCityListData = (params)=>{
    return {
        type: CITY_LIST,
        value:params
    }
}
//设置热门城市列表
const setHotListData = (params)=>{
    return {
        type: HOST_LIST,
        value:params
    }
}
//设置城市
export const setCityAction = (params)=>{
    return {
        type: CITY,
        value:params
    }
}
//设置城市下标
export const setCityIndexAction = (params)=>{
    return {
        type: CITY_INDEX,
        value:params
    }
}


//异步action
//请求城市列表
export const requestCityListData = (val)=>async (dispatch)=>{
        //请求
        let result = await get(api.CITY_LIST);
        let hotList = [],params=result.data.cities;
        //处理数据
        //热门城市
        params.map((item)=>item.isHot&&hotList.push({id:item.id,nm:item.nm}))
        //城市列表
    
        //构建action
        let action = setCityListData(CityList(params));//城市列表
        let data = setHotListData(hotList);//热门城市
        //派发action
        dispatch(action);
        dispatch(data);
}
//请求城市
export const requestCity = (val)=>async (dispatch)=>{
    //请求
    let result = await get(api.GET_LOCATION);
    let city = result.data.nm, index = result.data.id;
    let action = setCityAction(city);//设置城市
    let data = setCityIndexAction(index);//设置城市下标
    dispatch(action);
    dispatch(data);
}