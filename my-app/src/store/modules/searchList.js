import api from '../../request/api'
import {get} from '../../request'
//types
//设置搜索列表
const SEARCH_LIST = 'search/search_list';
//初始值
const initialState = {
   searchList:[]
}

//reducer
export default (state = initialState,action)=>{
    switch (action.type) {
        case SEARCH_LIST:
            return {
                ...state,
                searchList:action.value
            }
        default:
            return state;
    }
}
// 同步action
// 设置搜索列表
const setSearchListData = (params)=>{
    return {
        type: SEARCH_LIST,
        value:params
    }
}

//异步action
//请求电影列表
export const requestSearchListData = (val)=>async (dispatch)=>{
    //请求
    let result = await get(api.SEARCH_LIST,{kw:val,cityId:val});
    //构建action
    let action = setSearchListData(result);//城市列表
    //派发action
    dispatch(action);
}