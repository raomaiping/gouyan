import React from 'react'
import AppScroll from '../../../../../components/app-scroll'
import './style.scss'
export default (props)=> {  
    console.log(props.movieList);
    return(
        <AppScroll className='menu-list'>
            {
            props.movieList.map((item)=>
            <div className="item border-bottom" key={item.id}>
                <div className="left">
                    <img src={item.img.replace(/w.h/g,"128.180")} alt=''/>
                </div>
                <div className="item-con">
                    <div className="title"><h3>{item.nm}</h3></div>
                    <p>
                        <span>观众评</span>
                        <span>{item.sc}</span>
                    </p>
                    <p>主演:{item.star}</p>
                    <p>{item.showInfo}</p>
                    
                </div>
                <div className="right">
                        <span className={item.globalReleased ? 'red':'blue'}>
                            {item.globalReleased ? '购票':'预售'}
                        </span>
                </div>
            </div>
        )
        }
        
        </AppScroll>
    )
}



