
// 功能:电影列表一正在热映
// 请求方式: GET
// 参数: cityId
const MOVIE_ON_INFO_LIST = '/api/movieOnInfoList';


// 功能:电影列表一即将上映
// 请求方式: GET
// 参数: cityId
const MOVIE_COMING_LIST = '/api/movieComingList'

// 功能:影院
// 请求方式: GET
// 参数: cit
const CINEMA_LIST = '/api/cinemaList'

// 功能:搜索
// 请求方式: GET
// 参数: cityId kw=val
const SEARCH_LIST = '/api/searchList'

// 功能:电影详情
// 请求方式: GET
// 参数:movieId
const DETAILMOVIE = '/api/detailmovie'

// 功能:城市
// 请求方式: GET
// 参数:无
const CITY_LIST = '/api/cityList'

// 功能:城市定位
// 请求方式: GET
// 参数:无
const GET_LOCATION = '/api/getLocation'

export default {
    MOVIE_ON_INFO_LIST,
    MOVIE_COMING_LIST,
    CINEMA_LIST,
    SEARCH_LIST,
    DETAILMOVIE,
    CITY_LIST,
    GET_LOCATION
}