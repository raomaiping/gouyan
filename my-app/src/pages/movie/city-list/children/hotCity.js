import React from 'react'
export default(props)=>{
    return (
        <div className="hot_city">
        <div className="hot_title">热门城市</div>
        <div className="hot_city_list">
            {
                props.data.map(item=>(
                    <div className='hot_city_name' key={item.id} onClick={()=>{
                        props.onSend(item)
                    }}>
                        {item.nm}
                    </div>
                ))
            }
        </div>
    </div>
    )
}
