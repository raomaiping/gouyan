import React, { Component } from 'react'
import {connect} from 'react-redux'
import AppHeader from "../../../components/app-header"
import {requestSearchListData} from '../../../store/modules/searchList'
import {requestCity} from '../../../store/modules/cityList'
import Menu from '../root/children/menu/Menu'
import "./style.scss"
class Search extends Component {
    state = {
        inputVal:null
    };
    render() {
        let leftBtn = <span className='header-left-btn iconfont icon-fanhui' onClick={this.backAction}></span>;
        let {movieList} = this.props
        return (
            <div className='page subpage'>
                <AppHeader leftBtn={leftBtn} title='狗眼电影'/>
                <div className='content'>
                    <div className="search-header">
                        <input type="text" onChange = {this.inputVal} />
                    </div>
                    <h2>电影/电视剧/综艺</h2>
                    {
                        movieList && movieList.movies && <Menu movieList={movieList.movies.list}/>
                    }
                </div>
            </div>
        )
    }
    backAction = ()=>{
        this.props.history.goBack();
    }
    inputVal = (ev)=>{
        let timer = null;
        clearTimeout(timer);
        timer = setTimeout(
            this.setState({
                inputVal:ev.target.value
            })
          ,5000)
         
    }
    componentDidUpdate(a,b){
        if(b.inputVal!==this.state.inputVal){
            this.props.getSearchListData(this.state.inputVal,this.props.index)
        } 
    }
}
const mapStateToProps = (state,props)=>({
    //设置电影列表数据
    movieList:state.searchList.searchList.data,
    index:state.cityList.cityIndex,
    
})
const mapDispatchToProps = (dispatch,props)=>({
    //调用异步action数据
    getSearchListData(val){
        let action = requestSearchListData(val);
        dispatch(action);
    },
    getCity(){
        let action = requestCity()
        dispatch(action)
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Search);
