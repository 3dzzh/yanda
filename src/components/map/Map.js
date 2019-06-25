import React, { Component } from 'react';
import axios from'axios'
import url from'../../config'
import './map.css'
let BMap=window.BMap 
class Map extends Component {
    
    constructor(){
        super()
        this.state={
            long:0,
            lat:0,
            pageNo:1,
            pageSize:10,
            arr:[],
            Arr:[]
        }
    }
    componentDidMount () {
        axios.get(`${url}/MapMessage/getList?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res);
            var map = new BMap.Map("mapContainer"); // 创建Map实例
        map.centerAndZoom(new BMap.Point(119.54, 39.91), 17); // 初始化地图,设置中心点坐标和地图级别
        map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
        map.setCurrentCity("秦皇岛"); // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        for (var i = 0; i < res.data.length; i++) {
            var map = new BMap.Map("mapContainer"); // 创建Map实例
            console.log(res.data[i].longitude,res.data[i].latitude);
            var marker = new BMap.Marker(new BMap.Point(res.data[i].longitude,res.data[i].latitude));//标创建注点
            //Point(x,y)是封装好的一个方法，用来把坐标转换一下，以后如果用到有关坐标的功能都要用到这个方法；x是经度，y是维度   
            map.addOverlay(marker);//在地图的指定坐标添加覆盖物 也就是标注点   
            marker.setLabel(new BMap.Label("我是标注点"+(i+1),{offset:new BMap.Size(15,-25)}));//备注；如果不想要就删掉
        }
        map.addEventListener("click", this.showInfo);
        }).catch(err=>{console.log(err);
        })
        
        
    }
    showInfo=(e)=>{
        alert(e.point.lng,e.point.lat)
        this.setState({
            long:e.point.lng,
            lat:e.point.lat,
            arr:[e.point.lng,e.point.lat,"标记点1"],
        })
      
    }
    mark = ()=>{
        let Arr = []
        Arr.push(this.state.arr)
        console.log(Arr,this.state.arr);
        
        
    }
    render() {
        return (
            <div>
                <div className="mapContainer" id="mapContainer" style={{height:900,width:"80%"}} ></div>
            </div>
        );
    }
}

export default Map;
