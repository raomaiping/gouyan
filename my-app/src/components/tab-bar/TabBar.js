import React, { Component } from 'react'
import './style.scss'
export default class TabBar extends Component {
    state = {}
    render() {   
        const tabs = [
            {id: 1, title: '电影',basicPath:'/movie', path: '/movie', icon: 'icon-ziyuan', selectIcon: 'icon-dianying'},
            {id: 2, title: '影院',basicPath:'/cinema', path: '/cinema', icon: 'icon-huaban', selectIcon: 'icon-yingyuan'},
            {id: 3, title: '我的',basicPath:'/mine', path: '/mine', icon: 'icon-wode', selectIcon: 'icon-wodedangxuan1'}
        ]

        //根据地址栏当前地址判断哪个tabItem选中了
        let  selectIndex = tabs.findIndex(item=>this.state.currentPath.startsWith(item.basicPath))
        return (
           <nav className="tab-bar border-top">
              {
                  tabs.map((item,index)=>(
                    <li key={item.id} 
                            className='tab-item'
                            onClick={()=>this.changeTab(index,item.path)}>
                            <span className={'iconfont '+ ((selectIndex ===index) ?item.selectIcon:item.icon)}></span>
                            <span>{item.title}</span>
                         
                    </li>
                  ))
              }
           </nav>
        )
    }
    changeTab = (index,path)=>{
      //切换页面
      this.props.history.push(path)
    }
    static getDerivedStateFromProps(props,state){
        return {
            //取出当前地址栏的地址
            currentPath:props.location.pathname
        }
    }
}
