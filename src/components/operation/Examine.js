import React, {Component} from 'react';
class Examine extends Component{
    render(){

        return(

            <div className="main">
                <div className="title1">&nbsp;审核</div>

                <div className="title2"><p>
                    审核名称：<input name="aucSubject" type="text" value="" className="in" size="25"/>
                    审核日期：<input name="apgName" type="text" value=""  size="25"/>
                    <input className="btn" type="submit" value="搜索"/>
                </p></div>

                <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                    <tr>
                        <th width="10%">审核名称</th>
                        <th width="10%">审核信息</th>
                        <th width="10%">审核用户</th>
                        <th width="10%">审核部门</th>
                        <th width="10%">审核时间</th>
                        <th width="10%">审核状态</th>
                        <th width="10%">备注</th>
                    </tr>

                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td>名称</td>
                        <td>信息</td>
                        <td>魏老师</td>
                        <td>部门</td>
                        <td>2019-04-10</td>
                        <td><a style={{color:"#1BFFE4"}}>待审核</a></td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td>名称</td>
                        <td>信息</td>
                        <td>魏老师</td>
                        <td>部门</td>
                        <td>2019-04-10</td>
                        <td><a style={{color:"#1BFFE4"}}>待审核</a></td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td>名称</td>
                        <td>信息</td>
                        <td>魏老师</td>
                        <td>部门</td>
                        <td>2019-04-10</td>
                        <td><a style={{color:"#1BFFE4"}}>已审核</a></td>
                        <td></td>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td>名称</td>
                        <td>信息</td>
                        <td>魏老师</td>
                        <td>部门</td>
                        <td>2019-04-10</td>
                        <td><a style={{color:"#1BFFE4"}}>已审核</a></td>
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
export default Examine;

