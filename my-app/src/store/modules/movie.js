import api from '../../request/api'
import {get} from '../../request'
//types
//设置电影列表
const MOVIE_LIST = 'movie/movie_list';
const HOT_MOVIE_LIST = 'movie/hot_movie_list';
//初始值
const initialState = {
    movieList:[],
    hotmovieList:[]
}

//reducer
export default (state = initialState,action)=>{
    switch (action.type) {
        case MOVIE_LIST:
            return {
                ...state,
                movieList:action.value.data.movieList
            }
        case HOT_MOVIE_LIST:
            return {
                ...state,
                hotmovieList:action.value.data.comingList
            }
        default:
            return state;
    }
}
// 同步action
// 设置电影列表
const setMovieListData = (params)=>{
    return {
        type: MOVIE_LIST,
        value:params
    }
}
const setHotMovieListData = (params)=>{
    return {
        type: HOT_MOVIE_LIST,
        value:params
    }
}

//异步action
//请求电影列表
export const requestMovieData = (val)=>async (dispatch)=>{
        //请求
        let result = await get(api.MOVIE_ON_INFO_LIST,{cityId:val});
        let action = setMovieListData(result);
        dispatch(action)  
}
export const requestHotMovieData = (val)=>async (dispatch)=>{
    //请求
    let result = await get(api.MOVIE_COMING_LIST,{cityId:val});
    let action = setHotMovieListData(result);
    dispatch(action)  
}