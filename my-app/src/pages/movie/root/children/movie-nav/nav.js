import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class TabBar extends Component {
    state = {
        index:'/movie'
    }
    render() {   
        let {city} = this.props
        const tabs = [
            {id: 0, title: '正在热映',basicPath:'/movie', path: '/movie' },
            {id: 1, title: '即将上映',basicPath:'/movie/f-hot', path: '/movie/f-hot'},
        ]
        return (
            <div className="movie_menu border-bottom">
            <Link className="movie_menu_city" to="/movie/city-list">
                <span>{city}</span>
                <i className="iconfont icon-xiasanjiao"></i>
            </Link>
            <ul className="movie_menu_switch">
                {
                    tabs.map((item,index)=>
                        <div className={'movie_menu_active ' + ((item.path === this.state.index) ? 'active' :'')} 
                            onClick={()=>this.changeTab(item.path)}
                            key={item.id}>{item.title}
                        </div>
                    )
                }
                
            </ul>
            <Link className="movie_meun_search" to="/movie/search">
                <span className="iconfont icon-search"></span>
            </Link>
        </div>
        )
    }
    componentDidMount(){
        let pathname = this.props.history.location.pathname
        this.setState({
            index:pathname
        })
    }
    changeTab = (path)=>{
      //切换页面
      this.props.history.push(path)
    }

}
