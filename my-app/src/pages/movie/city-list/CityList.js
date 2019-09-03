import React, { Component } from 'react'
import {connect} from 'react-redux'
import {requestCityListData,setCityAction,setCityIndexAction} from '../../../store/modules/cityList'
import './style.scss'

import ListCity from './children/listCity'
import ListIndex from './children/listIndex'
class CityList extends Component {
    state = {
        selectIndex:0,
        flag:null
    };
    listDOM = React.createRef();
    render() {
        let {cityList,hotList} = this.props;  
        let {selectIndex} = this.state;
        return (
            <div className='page subpage' id='cityList'>
                {/* 城市列表 */}
                <ListCity list={cityList} onChange={this.handleChange} ref={this.listDOM} data={hotList} history={this.props.history} acquireCity={this.acquireCity}/>
                {/* 城市列表下标 */}
                <ListIndex item={cityList} selected={selectIndex} onChange={this.handleChange}/>
            </div>
        )
    }
    componentDidMount(){
        //请求城市数据
        this.props.getCityListData();
    }
    componentDidUpdate(oldProps,oldState){
        if((oldProps.selectIndex !== this.state.selectIndex)
            &&
            this.state.flag === 'nav'
        ){
            //nav修改Index才需要滚动，menu修改不需要滚动   让滚动视图到对应城市
            this.listDOM.current.scrollToIndex(this.state.selectIndex);
        }
    }
    //修改选中的城市按钮
    handleChange = ({index,flag})=>{ 
        (this.state.selectIndex !== index) && this.setState({selectIndex:index,flag})
    }
    acquireCity = (val)=>{
        let city = val.nm, index = val.id;
        this.props.setCity(city);
        this.props.setCityIndex(index)    
    }
}
const mapStateToProps = (state,props)=>({
    //设置城市数据
    cityList:state.cityList.cityList,
    hotList:state.cityList.hotList
})
const mapDispatchToProps = (dispatch,props)=>({
    //调用异步action数据
    getCityListData(){
        let action = requestCityListData();
        dispatch(action);
    },
    setCity(city){
        let action = setCityAction(city);
        dispatch(action); 
    },
    setCityIndex(index){
        let action = setCityIndexAction(index);
        dispatch(action);
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(CityList);