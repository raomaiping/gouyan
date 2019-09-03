import React ,{PureComponent} from 'react'
import HotCity from './hotCity'
import AppScroll from '../../../../components/app-scroll';

export default class ListCity extends PureComponent {
    listDOM = [];
    scroll = React.createRef();
    render(){
        let {data,list} = this.props
        this.listDOM = [];
        return (
            <AppScroll ref={this.scroll} onScroll={this.handleScroll}>
                {/* 热门城市 */}
                <HotCity data={data} onSend={this.handleAction}/>
                {/* 城市类型列表 */}
                <div className="city_list">
                {
                    list.map((item,index)=>{
                        let dom = React.createRef();
                        this.listDOM.push(dom);
                        return(
                            <div className='city-item' key={index} ref={dom}>
                                <div className="city_title">{item.index}</div>
                                <div className="city_list_name">
                                {
                                    item.list.map(i=>
                                        <div className='city_list_name_item' 
                                        onClick={()=>this.setCity(i)}
                                        key={i.id}>
                                            {i.nm}
                                        </div>
                                    )
                                }
                                </div>
                            </div>
                        )
                    }    
                    )
                } 
                </div>
            </AppScroll>
        )
    }

    scrollToIndex(index){
        //滚动视图，到对应的城市
        //根据下标计算需要偏移的高度
        let height = -182;
        for(let i = 0; i < index;i++){
            let dom = this.listDOM[i].current;
            height -= dom.offsetHeight;
        }
        //操作滚动视图，让城市滚动到对应位置
       this.scroll.current.scrollTo(height)
    }
    //处理滚动事件，查到应该选中的城市类型
    handleScroll=(y)=>{
        this.listDOM.forEach(({current:dom},i)=>{
        let maxY = -182, 
            minY = 0;
            for(let j = 0;j < i;j++){
                maxY -= this.listDOM[j].current.offsetHeight;
            }
            minY = maxY - this.listDOM[i].current.offsetHeight;
            if(y > minY && y <= maxY){
                this.props.onChange({index:i,flag:'menu'})
            }
        })
        
    }
    setCity(city){
        this.props.acquireCity(city)
        this.props.history.go(-1)
    }
    handleAction = (data)=>{
        this.setCity(data)
    }
}





