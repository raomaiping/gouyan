import React, { Component } from 'react'
export default class ErrorBoundary extends Component {
    state = {
        isError:false
    }
    render() {
       if(this.state.isError){
           return (
               <div>
                   出错了，请退出后重新进入
               </div>
               
           )
       }else{
            return this.props.children;
       }
    };

    componentDidCatch(...rest){
       this.setState({isError:true})
    }
}
