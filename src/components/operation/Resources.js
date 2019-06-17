import React, {Component} from 'react';
class Resources extends Component{
    handleClick = ()=>{
        this.props.add(1)
    }
    render(){

        return(

            <div className="main">
                <div className='title1'>&nbsp;资源</div>

                <div className="title2">
                    <span>
                        <a  onClick={this.handleClick} className="btn">新增</a>
                        <a  className="btn">删除</a>
                    </span>
                </div>

                <div className="title2">
                    <p>
                        资源名称：<input name="aucSubject" type="text" value="" className="in" size="25"/>
                        日期：<input name="apgName" type="text" value=""  size="25"/>
                        <input className="btn" type="submit" value="搜索"/>
                    </p>
                </div>

                <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                    <tr>
                        <th width="4%">选择</th>
                        <th width="8%">编号</th>
                        <th width="6%">规格</th>
                        <th width="11%">起点</th>
                        <th width="11%">终点</th>
                        <th width="10%">建设时间</th>
                        <th width="28%">用途</th>
                        <th width="10%">已在用芯</th>
                        <th width="12%">可分配纤芯</th>
                    </tr>
                    <tr onclick="getRadioBoxValue('selectID', 81);" >
                        <td >
                            <input type="radio" name="selectID" value="81"
                                   checked id="tmp81" onClick="javascript:document.auction.aucIDDefault.value='81';"/>
                        </td>
                        <td>MF06</td>
                        <td>24芯</td>
                        <td>信息馆机房</td>
                        <td>电气馆A楼机房</td>
                        <td>2019-03-20</td>
                        <td>1至6芯用于一卡通业务，7至14芯用于校园网业务</td>
                        <td>1至14芯在用</td>
                        <td>15至24芯空闲可分配</td>
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
export default Resources;

