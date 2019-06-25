import React, {Component} from 'react';
import axios from'axios'
import url from'../../config'
import { message } from 'antd';
class CableAdd extends Component{
    handleClick = ()=>{
        this.props.back(0)
    }
    handleClick1 = ()=>{
        let no = document.querySelector(".no").value
        let lat = document.querySelector(".lat").value
        let long = document.querySelector(".long").value
        let cross = document.querySelector(".cross").value
        let name = document.querySelector(".name").value
        let rule = document.querySelector(".rule").value
        let code = document.querySelector(".code").value
        let bumen = document.querySelector(".bumen").value
        let guanli = document.querySelector(".guanli").value
        let guandao = document.querySelector(".guandao").value
        let adress = document.querySelector(".adress").value
        let picture = document.querySelector(".picture").value
        let color = document.querySelector(".color").value
            let data={
                no:no,
                name:name,
                longitude:lat,
                latitude:long,
                rule:rule,
                userQuantity:cross,
                surplusQuantity:guandao,
                qrcode:code,
                department:bumen,
                userName:guanli,
                address:adress,
                img:picture,
                color:color
            }
            console.log(data);
        if(no == ""){
            message.info("编号不能为空")
        }else if(name ==""){
            message.info("名称不能为空")
        }else if(lat ==""){
            message.info("经度不能为空")
        }else if(long ==""){
            message.info("纬度不能为空")
        }else if(rule ==""){
            message.info("规格不能为空")
        }else if(cross ==""){
            message.info("通过光缆数不能为空")
        }else if(guandao ==""){
            message.info("管道空余量不能为空")
        }else if(code ==""){
            message.info("二维码不能为空")
        }else if(bumen ==""){
            message.info("所属部门不能为空")
        }else if(guanli ==""){
            message.info("管理人员不能为空")
        }else if(adress ==""){
            message.info("地址不能为空")
        }
        else{
           axios.post(`${url}/TubularWell/add`,data).then(res=>{
               console.log(res);
            if(res.data == ''){
                message.error("新增失败")
            }else{
               message.success("新增成功")  
            }   
           
        }).catch(err=>{
            console.log(err)
        }) 
        }    
    }
    handleClick2 = ()=>{
        document.querySelector(".no").value =""
        document.querySelector(".lat").value =""
        document.querySelector(".long").value  =""
        document.querySelector(".cross").value =""
        document.querySelector(".name").value =""
        document.querySelector(".rule").value =""
        document.querySelector(".code").value =""
        document.querySelector(".bumen").value =""
        document.querySelector(".guanli").value =""
        document.querySelector(".guandao").value =""
        document.querySelector(".adress").value =""
        document.querySelector(".picture").value =""
        document.querySelector(".color").value=""
    }
    render(){
       
        return(

            <div className="main">

                <div className='crumb'><a>工作台</a>&nbsp;>&nbsp;<a onClick={this.handleClick} >管井类资源</a>&nbsp;>&nbsp;新增管井类资源信息</div>

                <div className="title1"><span><a onClick={this.handleClick}>&lt;&lt;返回</a></span><h1>新增管井类资源信息</h1></div>

                <table class="table_form">

                    <tr>
                        <th style={{width:"45%"}} ><em>*</em>编号</th>
                        <td style={{width:"55%",textAlign:"left"}} ><input className="no" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>名称</th>
                        <td style={{width:"55%",textAlign:"left"}}> <input className="name" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}} ><em>*</em>经度</th>
                        <td style={{width:"55%",textAlign:"left"}}><input className="lat" type='text'/></td>
                    </tr>

                    <tr>
                        <th style={{width:"45%"}}><em>*</em>纬度</th>
                        <td style={{width:"55%",textAlign:"left"}}><input className="long" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>规格</th>
                        <td style={{width:"55%",textAlign:"left"}} ><input className="rule" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>通过光缆数</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="cross" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>管道空余量</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="guandao" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>二维码</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="code" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>所属部门</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="bumen" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>管理人员</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="guanli" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}><em>*</em>地址</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="adress" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}>图片</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="picture" type='text'/></td>
                    </tr>
                    <tr>
                        <th style={{width:"45%"}}>颜色</th>
                        <td style={{width:"55%",textAlign:"left"}}><input  className="color" type='text'/></td>
                    </tr>
                    <tr>
                        <td colspan="6" align="center">
                            <input type="submit" onClick={this.handleClick1} class="btn" value="提交"/>
                                <input type="hidden" id="auctionQuestion.qID" name="auctionQuestion.qID" value="1161"/>
                                    <input type="reset" onClick={this.handleClick2} class="btn" value="重设"/>
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

