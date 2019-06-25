import React from "react";
import Sidebar from  '../sidebar';
import Header from '../header/Header';
import Examine from'../operation/Examine'
import Fault from '../operation/Fault'
import FaultAdd from'../operation/FaultAdd'
import ResourcesAdd from '../operation/ResourcesAdd'
import Resources from'../operation/Resources'
import Content from '../Content/Content';
import ContentRittal from '../Content/ContentRittal';
import Cable from'../Content/Cable'
import CableAdd from'../Content/CableAdd'
import TubeWell from'../Content/TubeWell'
import TubeWellAdd from '../Content/TubeWellAdd'
import MotorRoom from'../Content/MotorRoom'
import Map from'../map/Map'
import './main.css'
class Main extends React.Component{
    state={
        content:<MotorRoom  />,
        information:['设备类资源管理','线缆类资源','管井类资源'],
        add:0,
        tubeWellId:""
    };
    componentDidMount(){
        this.setState({
            content:<MotorRoom add={this.add} />
        })
    }
    add = (can)=>{
        if(can == 1){
            this.setState({
                add:1
            })
        }else if(can == 2){
            this.setState({
                add:2
            })
        }else if(can == 3){
            this.setState({
                add:3
            })
        }else if(can == 4){
            this.setState({
                add:4
            })
        }else if(can == 5){
            this.setState({
                add:5
            })
        }else if(can == 6){
            this.setState({
                add:6
            })
        }else if(can == 7){
            this.setState({
                add:7
            })
        }else if(can == 8){
            this.setState({
                add:8
            })
        }
    };
    handleClick = a=>{
        if( a == "设备类资源管理"){
            this.setState({
                content:<MotorRoom add={this.add} />
            })
        }else if( a == "线缆类资源"){
            this.setState({
                content:<Cable add={this.add}/>
            })
        }else if( a == "管井类资源"){
            this.setState({
                content:<TubeWell add={this.add}/>
            })
        }else if( a == "资源"){
            this.setState({
                content:<Resources add={this.add} />
            })

        }else if( a == "故障"){
            this.setState({
                content:<Fault add={this.add} />
            })

        }else if( a == "审核"){
            this.setState({
                content:<Examine />
            })

        }
    };
    handleBack = (a,b)=>{
        this.setState({
            add:a,
            tubeWellId:b
        })
    };
    link = (title)=>{
        if(title == "资源管理"){
            this.setState({
                add:0,
                content:<MotorRoom add={this.add} />,
                information:['设备类资源管理','线缆类资源','管井类资源']
            })
        }else if(title == "地图管理"){
            this.setState({
                add:0,
                content:<Map add={this.add} />,
                information:['地图']
            })
        }
        else if(title == "运维管理"){
            this.setState({
                add:0,
                content:<Resources add={this.add} />,
                information:['资源','故障','审核']
            })
        }
    };
    render(){
        console.log(this.state.tubeWellId);
        
        return(
            <div style={{display:"flex",background:"#000"}}>
                <div style={{width:"152px"}}>
                    <Sidebar handle={this.link} />
                </div>
                <div className="right">
                    {this.state.add == 1?<ResourcesAdd back={this.handleBack}/>:
                        this.state.add == 2?<FaultAdd back={this.handleBack}/>:
                            this.state.add == 3?<CableAdd back={this.handleBack}/>:
                                this.state.add == 4?<TubeWellAdd back={this.handleBack}/>:
                                    this.state.add == 5?<ContentRittal tubeWellId={this.state.tubeWellId} back={this.handleBack}/>:
                                        this.state.add == 6?<MotorRoom add={this.add} />:
                                            this.state.add == 7?<Content back={this.handleBack}/>:
                            <div>
                                <Header text={this.state.information} second={this.handleClick}/>
                                {this.state.content}
                            </div>
                    }
                </div>

            </div>
        )
    }
}
export default Main;