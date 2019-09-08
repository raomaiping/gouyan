import React, { Component } from 'react'
import AppHeader from "../../../components/app-header"
export default class Search extends Component {
    render() {
        let leftBtn = <span className='header-left-btn iconfont icon-fanhui' onClick={this.backAction}></span>;
        return (
            <div className='page subpage'>
                <AppHeader leftBtn={leftBtn} title='猫眼电影' />
                <div className='content'>
                    <h1>搜索</h1>
                </div>
            </div>
        )
    }
    backAction = ()=>{
        this.props.history.goBack();
    }
}
