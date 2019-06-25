import React, {Component} from 'react';
import {Modal,Button,Input,message,Pagination} from'antd'
import url from'../../config'
import axios from'axios';
class Content extends Component{
    state={
        visible:false,
        arr:[],
        pageNo:1,
        pageSize:10,
        rittalId:"",
        id:"",
        dataTotal:""
    };
    componentDidMount(){
        let id = sessionStorage.getItem("id")
        console.log(url);
        axios.get(`${url}/Cabinet/getListByParentIdPage?id=${id}&pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res.data);
            this.setState({arr:res.data.content,dataTotal:res.data.totalElements,pageNo:res.data.totalPages})
        })
            .catch(err=>{console.log(err)})
    }
    handleClick = (a,id)=>{
        if(a==8){
            this.setState({
                visible:true
            })
        }else{
            this.props.back(a,id)
        }
        
    };
    handleOk = ()=>{
        let creator = document.querySelector(".create").value
        let name = document.querySelector(".name").value
        let no = document.querySelector(".name").value
        let place = document.querySelector(".place").value
        let code = document.querySelector(".code").value
        let id = Number(sessionStorage.getItem("id")) 
        if(creator == ""){
            message.info('请输入机柜创建者')
        }else if(name ==""){
            message.info('请输入机柜名称')
        }else if(no ==""){
            message.info('请输入机柜编号')
        }else if(place ==""){
            message.info('请输入机柜地点')
        }else if(code ==""){
            message.info('请输入二维码')
        }else{
            let data={
                creator:creator,
                name:name,
                no:no,
                place:place,
                parentid:id,
                code:code
            }
            console.log(data);
            
            axios.post(`${url}/Cabinet/add`,data).then(res=>{
                console.log(res);
                if(res.data =="" || res.data == null){
                    message.error("机柜添加失败")
                }else{
                    let id = sessionStorage.getItem("id")
                    console.log(url);
                    axios.get(`${url}/Cabinet/getListByParentIdPage?id=${id}&pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
                    console.log(res.data.content);
                    this.setState({arr:res.data.content})
                    }).catch(err=>{console.log(err)})
                   this.setState({
                    visible:false
                 });
                    message.success("机柜添加成功") 
                }
            }).catch(err=>{console.log(err);
            })
            
            
            

        }
    }
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    }
    handleDelete = ()=>{
        if(this.state.id ==""){
            message.info("请选择机柜")
        }else{
            axios.get(`${url}/Cabinet/delete?id=${this.state.id}`).then(res=>{
                console.log(res);
                if(res.data ==0){
                    message.success("删除成功")
                    let id = sessionStorage.getItem("id")
                    axios.get(`${url}/Cabinet/getListByParentIdPage?id=${id}&pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
                        console.log(res.data.content);
                        this.setState({arr:res.data.content})
                    })
                        .catch(err=>{console.log(err)})
                }else{
                    message.error("删除失败!请先删除机柜下的设备")
                }
            })
        }
    }
    handleChange = (pageNumber)=>{
        this.setState({
            pageNo:pageNumber
        })
        let id = sessionStorage.getItem("id")
        console.log(url);
        axios.get(`${url}/Cabinet/getListByParentIdPage?id=${id}&pageNo=${pageNumber}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res.data.content);
            this.setState({arr:res.data.content})
        })
            .catch(err=>{console.log(err)})
    }
    render(){

        return(
            <div className="main">
                <div className='title1'>&nbsp;设备类资源管理&nbsp;>&nbsp;电气馆机房&nbsp;>&nbsp;机房01<span><a onClick={()=>{this.handleClick(6)}}>&lt;&lt;返回</a></span></div>
                <div className="title2">
                    <span>
                        <a  onClick={()=>{this.handleClick(8)}} className="btn">新增</a>
                        <a  className="btn" onClick={this.handleDelete} >删除</a>
                    </span>
                </div>
                <ul>
                    { this.state.arr.map((item,index)=>{
                        return(
                            <li key={index} className="div-a">
                                <div className="content">
                                    <p><input type="radio" onClick={()=>{this.setState({id:item.id})}} name="vehicle" value="Bike"/><a onClick={()=>{this.handleClick(5,item.id)}}>{item.name}</a></p>
                                </div>
                                <div className="footer">
                                    <i className="iconfont">&#xe61b;</i>
                                </div>
                            </li>
                        )
                    })}

                </ul>


                <div className="page">
                    <span>
                    <Pagination showQuickJumper  total={this.state.dataTotal} onChange={this.handleChange} />
                    </span>
                </div>
                <Modal
                    visible={this.state.visible}
                    title="添加机柜"
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
                <div>机柜名称: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房名称" className="name" type="text" /></div> 
                <div>机柜编号: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房编号" className="no" type="text" /></div> 
                <div>机柜地点: &nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机房地点" className="place" type="text" /></div> 
                <div>二维码: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Input style={{marginTop:"15px",width:"80%"}} placeholder="请输入机柜二维码" className="code" type="text" /></div> 
                </Modal>
            </div>
        )
    }
}
export default Content;

