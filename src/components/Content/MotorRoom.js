import React, {Component} from 'react';
import {Modal,Button,Input,message,Pagination} from'antd';
import url from'../../config'
import axios from'axios';

class MotorRoom extends Component{

    constructor(){
        super();
        this.state={
            pageNo:1,
            pageSize:10,
            visible:false,
            arr:[],
            id:"",
            dataTotal:""
        };
    }

    componentDidMount(){
        axios.get(`${url}/ComputerRoom/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`)
            .then((res)=>{
                console.log(res);
                
                        this.setState({arr:res.data.content,dataTotal:res.data.totalElements});
        })
            .catch(err=>{console.log(err)})
    }
    handleClick = (a,b)=>{
        this.props.add(a)
        sessionStorage.setItem("id",b)
    };
    handleClick1 = ()=>{
        this.setState({
            visible:true
        })
    }
    handleOk = ()=>{
        let creator = document.querySelector(".create").value
        let name = document.querySelector(".name").value
        let no = document.querySelector(".name").value
        let place = document.querySelector(".place").value
        if(creator == ""){
            message.info('请输入机房创建者')
        }else if(name ==""){
            message.info('请输入机房名称')
        }else if(no ==""){
            message.info('请输入机房编号')
        }else if(place ==""){
            message.info('请输入机房地点')
        }else{
            let data={
                creator:creator,
                name:name,
                no:no,
                place:place
            }
            axios.post(`${url}/ComputerRoom/add`,data).then(res=>{
                console.log(res);
                if(res.data =="" || res.data == null){
                    message.error("机房添加失败")
                }else{
                    axios.get(`${url}/ComputerRoom/getListPage?pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`)
                    .then((res)=>{
                        console.log(res);
                                this.setState({arr:res.data.content});
                })
                    .catch(err=>{console.log(err)})    
                   this.setState({
                    visible:false
                 });
                    message.success("机房添加成功") 
                }
            }).catch(err=>{console.log(err);
            })
            
            
            

        }
    };
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    };
    handleDelete = ()=>{
        if(this.state.id ==""){
            message.info("请选择机房")
        }else{
            axios.get(`${url}/ComputerRoom/delete?id=${this.state.id}`).then(res=>{
                console.log(res);
                if(res.data ==0){
                    message.success("删除成功")
                    axios.get(`${url}/ComputerRoom/getListPage?pageNo=1&&pageSize=`).then((res)=>{
                        console.log(res);
                        this.setState({arr:res.data.content});
                    }).catch(err=>{console.log(err)})
            
                        
                    
                }else{
                    message.error("删除失败!请先删除机房下的机柜,设备等信息")
                }
            })
        }
    } 
    handleChange = (pageNumber)=>{
        axios.get(`${url}/ComputerRoom/getListPage?pageNo=${pageNumber}&&pageSize=${this.state.pageSize}`)
            .then((res)=>{
                console.log(res);
                
                        this.setState({arr:res.data.content,dataTotal:res.data.totalElements});
        })
            .catch(err=>{console.log(err)})
    }

    render(){

        let content = 
        (<ul>{this.state.arr.map((item,index)=>(
            <li key={index} className="div-a">
                <div className="content">
                    <p>
                        <input type="radio" style={{width:12,height:12}} onClick={()=>{this.setState({id:item.id})}} name="vehicle" value="Bike"/>
                        <a onClick={()=>{this.handleClick(7,item.id)}}>{item.name}</a>
                    </p>
                </div>
                <div className="footer">
                    <i className="iconfont">&#xe61b;</i>
                </div>
            </li>))}
            </ul>);

        return(
            <div className="main">
                <div className='title1'>&nbsp;设备类资源管理&nbsp;>&nbsp;电气馆机房</div>

                <div className="title2">
                    <span>
                        <a  onClick={this.handleClick1} className="btn">新增</a>
                        <a  className="btn" onClick={this.handleDelete} >删除</a>
                    </span>
                </div>

                {this.state.arr?content:<div></div>}


                <div className="page">
                    <span>
                    <Pagination showQuickJumper  total={this.state.dataTotal} onChange={this.handleChange} />
                    </span>
                </div>
                <Modal
                    visible={this.state.visible}
                    title="添加机房"
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
                <div>创建者: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房创建者" className="create" type="text" /></div>
                <div>机房名称: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房名称" className="name" type="text" /></div> 
                <div>机房编号: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房编号" className="no" type="text" /></div> 
                <div>机房地点: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房地点" className="place" type="text" /></div> 
                </Modal>
            </div>
        )
    }
}
export default MotorRoom;

