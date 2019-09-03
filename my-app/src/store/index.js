import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import cityList from './modules/cityList'
import movieList from './modules/movie'
const reducer = combineReducers({
    cityList,
    movieList
});
//获得redux浏览器的谷歌开发工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//构建store时使用工具
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))

export default store

