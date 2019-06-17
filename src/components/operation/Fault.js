import React, {Component} from 'react';
class Fault extends Component{
    handleClick = ()=>{
        this.props.add(2)
    };
    render(){

        return(

            <div className="main">
                <div className='title1'>&nbsp;故障</div>

                <div className="title2">
                    <span>
                        <a  className="btn" onClick={this.handleClick}>新增</a>
                        <a href="" className="btn">删除</a>
                    </span>
                </div>
                <div className="title2">
                    <p>
                    故障名称：<input name="aucSubject" type="text" value="" className="in" size="25"/>
                    日期：<input name="apgName" type="text" value=""  size="25"/>
                    <input className="btn" type="submit" value="搜索"/>
                    </p>
                </div>

                <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                    <tr>
                        <th width="4%">选择</th>
                        <th width="10%">故障名称</th>
                        <th width="10%">故障信息</th>
                        <th width="10%">处理状态</th>
                        <th width="10%">处理人员</th>
                        <th width="10%">处理时间</th>
                        <th width="10%">备注</th>
                    </tr>

                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td >
                            <input type="radio" name="selectID" value="81"
                                   checked id="tmp81" onClick="javascript:document.auction.aucIDDefault.value='81';"/>
                        </td>
                        <td>名称</td>
                        <td>信息</td>
                        <td><a style={{color:"#1BFFE4"}}>待处理</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td >
                            <input type="radio" name="selectID" value="81"
                                   checked id="tmp81" onClick="javascript:document.auction.aucIDDefault.value='81';"/>
                        </td>
                        <td>名称</td>
                        <td>信息</td>
                        <td><a style={{color:"#1BFFE4"}}>待处理</a></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td >
                            <input type="radio" name="selectID" value="81"
                                   checked id="tmp81" onClick="javascript:document.auction.aucIDDefault.value='81';"/>
                        </td>
                        <td>名称</td>
                        <td>信息</td>
                        <td><a style={{color:"#1BFFE4"}}>已处理</a></td>
                        <td>张老师</td>
                        <td>2019-04-09</td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td >
                            <input type="radio" name="selectID" value="81"
                                   checked id="tmp81" onClick="javascript:document.auction.aucIDDefault.value='81';"/>
                        </td>
                        <td>名称</td>
                        <td>信息</td>
                        <td><a style={{color:"#1BFFE4"}}>已处理</a></td>
                        <td>李老师</td>
                        <td>2019-04-09</td>
                        <td></td>
                    </tr>

                </table>


                <div className="page">
                    <span>
                        上一页  1 - 0 共 0   下一页  跳转到：
                        <select>
                            <option>第1页</option>
                        </select>
                    </span>
                </div>
            </div>
        )
    }
}
export default Fault;

