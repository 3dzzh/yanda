import React, {Component} from 'react';
import {Modal,Button,Input,message} from'antd'
import url from'../../config'
import axios from'axios';
class Content extends Component{
    state={
        visible:false,
        arr:[],
        pageNo:1,
        pageSize:10
    };
    componentDidMount(){
        console.log(url);
        axios.get(`${url}/Cabinet/getListByParentIdPage?id=1&pageNo=${this.state.pageNo}&&pageSize=${this.state.pageSize}`).then(res=>{
            console.log(res.data.content);
            this.setState({arr:res.data.content})
        })
            .catch(err=>{console.log(err)})
    }
    handleClick = (a)=>{
        if(a==8){
            this.setState({
                visible:true
            })
        }else{
            this.props.back(a)
        }

    };
    handleOk = ()=>{
        let name = document.querySelector(".motorRoom").value
        if(name == ""){
            alert('请输入机柜信息')
        }else{
            this.setState({
                visible:false
            })
            message.success("机柜添加成功")

        }
    }
    handleCancel = ()=>{
        this.setState({
            visible:false
        })
    }
    render(){

        return(
            <div className="main">
                <div className='title1'>&nbsp;设备类资源管理&nbsp;>&nbsp;电气馆机房&nbsp;>&nbsp;机房01<span><a onClick={()=>{this.handleClick(6)}}>&lt;&lt;返回</a></span></div>
                <div className="title2">
                    <span>
                        <a  onClick={()=>{this.handleClick(8)}} className="btn">新增</a>
                        <a  className="btn">删除</a>
                    </span>
                </div>
                <ul>
                    { this.state.arr.map((item,index)=>{
                        return(
                            <li key={index} className="div-a">
                                <div className="content">
                                    <p><input type="checkbox" name="vehicle" value="Bike"/><a onClick={()=>{this.handleClick(5)}}>{item.name}</a></p>
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
                        上一页  1 - 0 共 0   下一页  跳转到：
                        <select>
                            <option>第1页</option>
                        </select>
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
                    <Input placeholder="请输入机柜名称" className="motorRoom" type="text" />
                </Modal>
            </div>
        )
    }
}
export default Content;

