import React, {Component} from 'react';
import url from'../../config'
import axios from'axios'
import {message,Pagination} from'antd'
import'./tubewell.css'
class TubeWell extends Component{
    constructor(){
        super()
        this.state={
            arr:[],
            pageNo:1,
            pageSize:10,
            tubularWellId:"",
            position:"",
            tdId:"",
            dataTotal:""
        }
    }
    componentDidMount(){
        
        axios.get(`${url}/TubularWell/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`)
            .then((res)=>{
                console.log(res);
                 
                let BMap=window.BMap 
                var map = new BMap.Map("mapContainer"); // 创建Map实例
                map.centerAndZoom(new BMap.Point(119.54, 39.91), 17); // 初始化地图,设置中心点坐标和地图级别
                map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
                map.setCurrentCity("秦皇岛"); // 设置地图显示的城市 此项是必须设置的
                map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
                if(res.data.content.length !=0){
                for (var i = 0; i < res.data.content.length; i++) {
                var map = new BMap.Map("mapContainer"); // 创建Map实例
                console.log(res.data.content[i][0],res.data.content[i][1]);
                var marker = new BMap.Marker(new BMap.Point(res.data.content[i][0],res.data.content[i][1]));//标创建注点
                //Point(x,y)是封装好的一个方法，用来把坐标转换一下，以后如果用到有关坐标的功能都要用到这个方法；x是经度，y是维度   
                map.addOverlay(marker);//在地图的指定坐标添加覆盖物 也就是标注点   
                marker.setLabel(new BMap.Label("我是标注点"+(i+1),{offset:new BMap.Size(15,-25)}));//备注；如果不想要就删掉
            }
        }
                console.log(res);
                        this.setState({arr:res.data.content,dataTotal:res.data.totalElements,pageNo:res.data.pageNumber});
        })
            .catch(err=>{console.log(err)})
            
    }
    handleClick = ()=>{
        this.props.add(4)
    }
    handleClick1 = ()=>{
        let no = document.querySelector(".in").value
        let latitude = document.querySelector('.jing').value
        let longitude = document.querySelector('.wei').value
            let data={
                no:no,
                latitude:latitude,
                longitude:longitude
            }
            console.log(data);
            axios.post(`${url}/TubularWell/query`,data).then(res=>{
                console.log(res);
                this.setState({
                    arr:res.data
                })
            }).catch(err=>{console.log(err);
            })
    }
    select = (id,index)=>{
        this.setState({
            tubularWellId:id,
            position:index
        })
    }
    delete = ()=>{
        if(this.state.tdId == ""){
            message.info("请选择管井")
        }else{
            axios.get(`${url}/TubularWell/delete?id=${this.state.tdId}`).then(res=>{
                console.log(res);
                if(res.data ==0){
                    message.success("删除成功")
                    console.log(this.state.arr,this.state.position);
                    axios.get(`${url}/TubularWell/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`)
                    .then((res)=>{ 
                    console.log(res);
                        this.setState({arr:res.data.content});
                    })
                    .catch(err=>{console.log(err)})
                    
                }else{
                    message.error("删除失败")
                }
            })
        }
    }
    handleChange = (pageNumber)=>{
        this.setState({
            pageNo:pageNumber
        })
        axios.get(`${url}/TubularWell/getListPage?pageNo=${pageNumber}&&pageSize=${this.state.pageSize}`)
            .then((res)=>{ 
                console.log(res);
                        this.setState({arr:res.data.content});
        })
            .catch(err=>{console.log(err)})
    }
    render(){

        return(
            <div className="main">
                <div className="title1">&nbsp;管井类资源</div>
                <div className="title2">
                    <span>
                        <a  onClick={this.handleClick} className="btn">新增</a>
                         <a  className="btn" onClick={this.delete} >删除</a>
                    </span>
                </div>
                <div className="div-c">
                <div className="mapContainer" id="mapContainer" style={{height:600,width:"100%"}} ></div>
                </div>
                <div className="div-b">
                    <p className="tubeWell" >
                    编号：<input placeholder="编号为正整数"  type="text"  className="in" size="25"/>&nbsp;&nbsp;&nbsp;
                    经度：<input placeholder=""  type="text"  className="jing" size="25"/>&nbsp;&nbsp;&nbsp;
                    纬度：<input placeholder=""  type="text"  className="wei" size="25"/>&nbsp;
                        <input className="btn" onClick={this.handleClick1} type="submit" value="搜索"/>
                    </p>
                    <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                        <tr>
                            <th width="4%">选择</th>
                            <th width="4%">名称</th>
                            <th width="4%">名称</th>
                            <th width="10%">编号</th>
                            <th width="12%">经度</th>
                            <th width="12%">纬度</th>
                            <th width="8%">通过光缆</th>
                            <th width="8%">管道空余量</th>
                        </tr>
                        {this.state.arr==null||this.state.arr.length == 0?"暂无数据":( this.state.arr.map((item,index)=>(
                           <tr>
                             <td> <input type="radio" name="select" onClick={()=>{this.setState({tdId:item.id})}} /> </td>
                             <td>{index+1}</td> 
                             <td>{item.name}</td> 
                             <td>{item.no}</td> 
                             <td>{item.longitude}</td> 
                             <td>{item.latitude}</td> 
                             <td>{item.usedQuantity}</td> 
                             <td>{item.surplusQuantity}</td> 
                             </tr>) 
                        )) }
                        
                    </table>
                    <div className="page">
                    <span>
                    <Pagination showQuickJumper  total={this.state.dataTotal} onChange={this.handleChange} />
                    </span>
                    </div>
                </div>

            </div>
        )
    }
}
export default TubeWell;

