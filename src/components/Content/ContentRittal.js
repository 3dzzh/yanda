import React, {Component} from 'react';
class Content extends Component{
    state={
        show1:"none",
        show2:"none",
        show3:"none"
    }
    handleClick = ()=>{
        this.props.back(7)
    }
    handleEnter = (a)=>{
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
                        <li className="odf" onMouseEnter={()=>{this.handleEnter(1)}} onMouseLeave={()=>{this.handleLeave(1)}} >ODF1</li>
                        <li className="odf" onMouseEnter={()=>{this.handleEnter(2)}} onMouseLeave={()=>{this.handleLeave(2)}}>ODF2</li>
                        <li className="odf" onMouseEnter={()=>{this.handleEnter(3)}} onMouseLeave={()=>{this.handleLeave(3)}}>ODF3</li>
                    </ul>
                    <div>
                        <div className="odf1" style={{background:"#00b3d4", display:this.state.show1,marginTop:"30px"}} >
                            电气管A106机房至美术馆机房144芯，
                            1-12芯用于美术馆区域校园网业务，
                            13-24芯空闲可分配，
                            25-36芯用于一卡通业务，
                            37-144空闲可分配。
                        </div>
                        <div className="odf2" style={{background:"#00b3d4",display:this.state.show2,marginTop:"165px"}}>
                            电气官A106机房至里仁教学楼48芯，
                            1-12芯用于里仁学校校园网业务，
                            13-24芯用于一卡通业务，
                            25-36芯用于一卡通业务，
                            37-48空闲可分配。
                        </div>
                        <div className="odf3" style={{background:"#00b3d4",display:this.state.show3,marginTop:"300px"}}>
                            电气馆A106机房至高压科学研究院中心144芯，
                            1-8芯用于里西一组团校园网业务
                            9-16芯用于西西组团一卡通业务，
                            25-144芯空闲可分配。
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default Content;

