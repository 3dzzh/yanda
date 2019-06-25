import React, {Component} from 'react';
import url from'../../config'
import axios from'axios'
import {Spin, message,Pagination,Modal,Button} from'antd'
import './cable.css'
class Cable extends Component{
    constructor(){
        super()
        this.state={
            pageNo:1,
            pageSize:10,
            data:"",
            id:"",
            dataTotal:"",
            tdId:"",
            long:"",
            lat:"",
            arr:[],
            visible:false
        }
    }
    componentDidMount() {
        
        console.log(this.state.pageNo);
        axios.get(`${url}/Cables/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res);
            let BMap=window.BMap 
            var map = new BMap.Map("mapContainer",{enableMapClick:false}); // 创建Map实例
            map.centerAndZoom(new BMap.Point(119.54, 39.91), 16); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
            map.setCurrentCity("秦皇岛"); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放      
            console.log(this.state.arr);
            map.addEventListener("click", this.showInfo);
            this.setState({
                data:res.data.content,
                pageNo:res.data.totalPages,
                dataTotal:res.data.totalElements
            })
            
        }).catch(err=>{console.log(err);
        })
    }
    showInfo=(e)=>{
        let BMap=window.BMap 
        var map = new BMap.Map("mapContainer",{enableMapClick:false}); // 创建Map实例
        var point = new BMap.Point(119.54, 39.91);
        map.centerAndZoom(point, 16);
        var marker = new BMap.Marker(point);
	    map.addOverlay(marker);
        this.setState({
            visible:true,
            arr:[e.point.lng,e.point.lat]
        })
    }
    handleSearch(){
        let no = document.querySelector(".in").value
        let start = document.querySelector(".start").value
        let end = document.querySelector(".end").value
        let rule = document.querySelector(".rule").value
        axios.get(`${url}/Cables/query?no=${no}&&rule=${rule}&&startPlace=${start}&&endPlace=${end}`).then(res=>{
            console.log(res);
            if(res.data == ""){
                message.error("搜索失败")
                this.setState({
                    data:[]
                })
            }else{
                message.success("搜索成功")
                this.setState({
                    data:res.data
                })
            }
           
        })
    }
    handleClick = ()=>{
        this.props.add(3)
    };
    handleClick1 = (a,b,c,d)=>{
        let BMap=window.BMap 
            var map = new BMap.Map("mapContainer"); // 创建Map实例
            map.centerAndZoom(new BMap.Point(119.54, 39.91), 16); // 初始化地图,设置中心点坐标和地图级别
            map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
            map.setCurrentCity("秦皇岛"); // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放      
            console.log(this.state.arr);
            var p1 = new BMap.Point(a,b);
            var p2 = new BMap.Point(c,d);
            var p3 = new BMap.Point(119.53615525241723,39.913099319666976);
            var p4 = new BMap.Point(119.54449152754982,39.913154661993715);
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});
            driving.search(p1, p2,{waypoints:[p3,p4]});//waypoints表示途经点
    };
    handleChange = (pageNumber)=>{
        console.log(this.state.pageNo);
        this.setState({
            pageNo:pageNumber
        })
        axios.get(`${url}/Cables/getListPage?pageNo=${pageNumber}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res);
            this.setState({
                data:res.data.content,
                pageNo:res.data.tatalPages,
                dataTotal:res.data.totalElements
            })
            
        })
    }
    delete = ()=>{
        if(this.state.tdId == ""){
            message.info("请先选择,在删除")
        }else{
            axios.get(`${url}/Cables/delete?id=${this.state.tdId}`).then(res=>{
                console.log(res);
                if(res.data == 0){
                    message.success("删除成功") 
                    console.log(this.state.pageNo);
                    axios.get(`${url}/Cables/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
                        console.log(res);
                        this.setState({
                            data:res.data.content,
                            pageNo:res.data.totalPages,
                            dataTotal:res.data.totalElements
                        })
                    })
                }else{
                   message.success("删除失败") 
                }
                
            })
        }
    }
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    }
    handleOk = ()=>{
        this.setState({
            
        })
    }
    render(){
        return(
            <div className="main">
                <div className='title1'>&nbsp;线缆类资源</div>
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
                    <p className="tubeWell">
                        编号：<input  type="text"  className="in" size="25"/>&nbsp;&nbsp;&nbsp;&nbsp;
                        规格：<input className="rule"   type="text"  size="25"/><br/>
                        起点：<input className="start"  style={{marginTop:"10px"}}  type="text"   size="25"/>&nbsp;&nbsp;&nbsp;&nbsp;
                        终点：<input  className="end" style={{marginTop:"10px"}}  type="text"   size="25"/>
                        <input className="btn" onClick={this.handleSearch.bind(this)} type="submit" value="搜索"/>
                    </p>
                    <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                        <tr>
                            <th width="8%">选择</th>
                            <th width="8%">序号</th>
                            <th width="8%">编号</th>
                            <th width="6%">规格</th>
                            <th width="12%">起点</th>
                            <th width="12%">终点</th>
                            <th width="12%">用途</th>
                            <th width="8%">建设时间</th>
                        </tr>
                        {this.state.data==null||this.state.data.length == 0?"暂无数据":this.state.data.map((item,index)=>(
                          <tr onClick={()=>{this.handleClick1(item.startLongitude,item.startLatitude,item.endLongitude,item.endLatitude)}} key={index}>
                            <td> <input type="radio" name="select" onClick={()=>{this.setState({tdId:item.id})}} /> </td>
                            <td>{index+1}</td>
                            <td>{item.no}</td>
                            <td>{item.rule}</td>
                            <td>{item.startPlace}</td>
                            <td>{item.endPlace}</td>
                            <td>{}</td>
                            <td>{item.time}</td>
                        </tr>  
                        ))}
                        
                        
                       
                    </table>
                    <div className="page">
                    <span>
                    <Pagination showQuickJumper  total={this.state.dataTotal} onChange={this.handleChange} />
                    </span>
                    </div>
                </div>
                <Modal
                    title="添加途经点"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                            确定
                        </Button>,
                    ]}
                >
                   
                </Modal>
     
            </div>
        )
    }
}
export default Cable;

