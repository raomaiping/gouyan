import React from 'react'
export default (props)=> {
    let {selected,onChange} = props;
    return (
        <div className="city_list_index">
        {
            props.item.map((item,index)=>
                <div className={'index_item ' +( selected === index?'active':'')}
                onClick={()=>onChange({index,flag:'nav'})}
                key={item.index}>
                {item.index}
                </div>
            )
        }
        </div>
    )
    
}
