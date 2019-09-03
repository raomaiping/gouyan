import React ,{Component}from 'react'
import AppHeader from '../../../components/app-header'
import {connect} from 'react-redux'
import Menu from './children/menu/Menu'
import Nav from './children/movie-nav/nav'
import {requestHotMovieData} from '../../../store/modules/movie'
import './style.scss'
class HotMovie extends Component {
    render() {
        let {city,hotmovieList,history} = this.props
        return (
            
            <div className='page' id='movie'>
                <AppHeader title='狗眼电影'/>
                <div className='Content'>
                    <Nav city={city} history={history}/>
                    <Menu movieList={hotmovieList}/>
                </div>
            </div>
        )
    }
    componentDidMount(){
        let {index} = this.props;
        this.props.getMovieData(index);   
    }

}
const mapStateToProps =(state)=>({
    city:state.cityList.city,
    index:state.cityList.cityIndex,
    hotmovieList:state.movieList.hotmovieList
})

const mapDispatchToProps =(dispatch)=>({
    //请求电影列表数据
   getMovieData(val){
       let action = requestHotMovieData(val);
       dispatch(action)
   }
})




export default connect(mapStateToProps,mapDispatchToProps)(HotMovie);