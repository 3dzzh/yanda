import React, {Component} from 'react';

class Sidebar extends Component{
    render(){

        return(

            <div className="frame-side">

                <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                    <tr>
                        <td>
                            <ul className="menu">
                                <li>
                                    <a  onClick={()=>{this.props.handle("资源管理",1)}} target="main">资源管理</a><br />
                                    <a  onClick={()=>{this.props.handle("地图管理",2)}} target="main">地图管理</a><br />
                                    <a  onClick={()=>{this.props.handle("运维管理",3)}} target="main">运维管理</a><br />
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}
export default Sidebar;