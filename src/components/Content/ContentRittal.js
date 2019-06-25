import React, {Component} from 'react';
import url from'../../config'
import {Spin} from'antd'
import axios from 'axios';
class Content extends Component{
    state={
        show1:"none",
        show2:"none",
        show3:"none",
        data:""
    }
    componentDidMount(){
        axios.get(`${url}/Equipment/getListByParentID?id=${this.props.tubeWellId}`).then(res=>{
            console.log(res);
            let newData = res.data.reverse()
           this.setState({
               data:newData
           })
        }).catch(err=>{console.log(err);
        })
    }
    handleClick = ()=>{
        this.props.back(7)
    }
    handleEnter = (a,b)=>{
        if(a==1){
            this.setState({
                show1:"block"
            })
        }else if(a == 2){
            this.setState({
                show2:"block"
            })
        }else if(a == 3){
            this.setState({
                show3:"block"
            })
        }
        axios.get(`${url}/Cabinet/get?id=${b}`).then(res=>{
            console.log(res);
            this.setState({
                
            })
        })

    }
    handleLeave = (a)=>{
        if(a==1){
            this.setState({
                show1:"none"
            })
        }else if(a==2){
            this.setState({
                show2:"none"
            })
        }else if(a==3){
            this.setState({
                show3:"none"
            })
        }

    }

    render(){
        
        return(
            <div className="main">
                <div className='crumb'><a>工作台</a>&nbsp;>&nbsp;<a onClick={this.handleClick} >设备类资源管理</a>&nbsp;>&nbsp;机柜信息</div>

                <div className="title1"><span><a onClick={this.handleClick}>&lt;&lt;返回</a></span><h1>机柜信息</h1></div>

                <div className="title4" style={{display:"flex"}}>
                    <ul>
                        {this.state.data.length == 0?<Spin />:this.state.data.map((item,index)=>(
                            <li key={index} className="odf" onMouseEnter={()=>{this.handleEnter(index+1,item.id)}} onMouseLeave={()=>{this.handleLeave(index+1)}} >{item.name}</li>
                        ))}
                    </ul>
                    <div>
                    {this.state.data.length == 0?<Spin />:this.state.data.map((item,index)=>(
                           <div className="odf1" style={{background:"#00b3d4", display:this.state.show1,marginTop:"30px"}} >
                            
                           </div>
                        ))}
                        
                        
                    </div>

                </div>

            </div>
        )
    }
}
export default Content;

