import React, {Component} from 'react';
import axios from'axios'
import {message} from'antd'
import url from'../../config'
class CableAdd extends Component{

    handleClick = ()=>{
        this.props.back(0)
    }
    handleClick1 = ()=>{
        let no = document.querySelector(".no").value
        let name = document.querySelector(".name").value
        let rule = document.querySelector(".rule").value
        let startLong = document.querySelector(".startLong").value
        let startLat = document.querySelector(".startLat").value
        let endLong = document.querySelector(".endLong").value
        let endLat = document.querySelector(".endLat").value
        let time = document.querySelector(".time").value
        let code = document.querySelector(".code").value
        let use = document.querySelector(".use").value
        let data={
            no:no,
            name:name,
            startLongitude:startLong,
            startLatitude:startLat,
            endLongitude:endLong,
            endLatitude:endLat,
            rule:rule,
            time:time,
            qrcode:code
        }
        axios.post(`${url}/Cables/add`,data).then(res=>{
            console.log(res);
            if(res.data !=""){
                message.success("新增成功")
            }else{
                message.success("新增失败")
            }
        })
    }
    render(){

        return(

            <div className="main">

                <div className='crumb'><a>工作台</a>&nbsp;>&nbsp;<a onClick={this.handleClick} >线缆类资源</a>&nbsp;>&nbsp;新增线缆类资源信息</div>

                <div className="title1"><span><a onClick={this.handleClick}>&lt;&lt;返回</a></span><h1>新增线缆类资源信息</h1></div>

                <table className="table_form">
                    <tr>
                        <th style={{widtd:"45%"}} width="35%"><em>*</em>编号</th>
                        <td style={{widtd:"55%",textAlign:"left"}} width="65%"><input className="no" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}} width="35%"><em>*</em>名称</th>
                        <td style={{widtd:"55%",textAlign:"left"}} width="65%"> <input className="name" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}} width="35%"><em>*</em>规格</th>
                        <td style={{widtd:"55%",textAlign:"left"}} width="65%"> <input className="rule" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}><em>*</em>起点经度</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="startLong" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}><em>*</em>起点纬度</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="startLat" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}><em>*</em>终点经度</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="endLong" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}><em>*</em>终点纬度</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="endLat" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}>用途</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="use" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}>建设时间</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="time" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{widtd:"45%"}}>二维码</th>
                        <td style={{widtd:"55%",textAlign:"left"}}><input className="code" type='text'/></td>
                    </tr>
                    <tr>
                        <td colspan="6" align="center">
                            <input type="submit" className="btn" onClick={this.handleClick1}  value="提交"/>
                                <input type="hidden" id="auctionQuestion.qID" name="auctionQuestion.qID" value="1161"/>
                                    <input type="reset" className="btn" value="重设"/>
                                        <input type="hidden" name="struts.token.name" value="struts.token" />
                                        <input type="hidden" name="struts.token" value="LV4W1TMRAOBNU5M7X3WTTRG5AANJVQ9N" />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default CableAdd;

