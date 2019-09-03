import React, { lazy, Suspense,Fragment  } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect
} from "react-router-dom";
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';
import TabBar from "./components/tab-bar/TabBar";
import Loading from "./components/loading";


//根页面
const Movie = lazy(()=>import('./pages/movie/root/Movie'))
const Cinema = lazy(()=>import('./pages/cinema/root/Cinema'))
const NotFind = lazy(()=>import('./pages/common/not-find/NotFind'))
const Mine = lazy(()=>import('./pages/mine/root/Mine'))

//子页面
const Search = lazy(()=>import('./pages/movie/search/Search'))
const CityList = lazy(()=>import('./pages/movie/city-list/CityList'))
const HotMovie = lazy(()=>import('./pages/movie/root/hot'))
export default ()=>{
  return(
    <Router>
    <div id="app">
      <Suspense fallback={<Loading/>}>
        {/* 根页面 */}
       <CacheSwitch>
           <Route  path='/' exact render={()=><Redirect to="/movie"/>}/>
           <Route  path='/movie' exact component={Movie}/>
           <CacheRoute path='/cinema' component={Cinema}/>
           <CacheRoute path='/mine' component={Mine}/>
           {/* 子页面 */}
           <Fragment>
            {/* 电影的子页面 */}
            <CacheRoute path="/movie/city-list" component={CityList}/>  
            <Route path="/movie/search" component={Search}/>  
            <Route path="/movie/f-hot" component={HotMovie}/>
          </Fragment>
           <Route path='/404' component={NotFind}/>
           <Route  render={()=><Redirect to="/404"/>}/>
         </CacheSwitch>

          
      </Suspense>
       <Route component={TabBar}/>
    </div>
  
  </Router>
  )
}