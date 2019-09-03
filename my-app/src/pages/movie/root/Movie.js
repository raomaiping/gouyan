import React ,{Component}from 'react'
import AppHeader from '../../../components/app-header'
import {connect} from 'react-redux'
import Menu from './children/menu/Menu'
import {requestMovieData} from '../../../store/modules/movie'
import {requestCity} from '../../../store/modules/cityList'
import Nav from './children/movie-nav/nav'

import './style.scss'
class Movie extends Component {
    render() {
        let {city,movieList,history} = this.props
        return (
            (this.props.city )&&
            (<div className='page' id='movie'>
                <AppHeader title='狗眼电影'/>
                <div className='Content'>
                    <Nav city={city} history={history}/>
                    <Menu movieList={movieList}/>
                </div>
            </div>)
        )
    }
    componentDidMount(){
       if(this.props.index === null){
        this.props.getCity();
       }
       let {index} = this.props;
        this.props.getMovieData(index); 
    }
    componentDidUpdate(prevProps){
        if(this.props.index !== prevProps.index){
            let {index} = this.props;
            this.props.getMovieData(index); 
        }
    } 
}

const mapStateToProps =(state)=>({
    city:state.cityList.city,
    index:state.cityList.cityIndex,
    movieList:state.movieList.movieList
})

const mapDispatchToProps =(dispatch)=>({
    //请求电影列表数据
   getMovieData(val){
       let action = requestMovieData(val);
       dispatch(action)
   },
   //请求城市位置
   getCity(){
       let action = requestCity()
       dispatch(action)
   }
})

export default connect(mapStateToProps,mapDispatchToProps)(Movie);