import React, {Component} from 'react';
class TubeWell extends Component{
    handleClick = ()=>{
        this.props.add(4)
    }

    render(){

        return(
            <div className="main">
                <div className="title1">&nbsp;管井类资源</div>
                <div className="title2">
                    <span>
                        <a  onClick={this.handleClick} className="btn">新增</a>
                         <a  className="btn">删除</a>
                    </span>
                </div>
                <div className="div-c">
                    <img src="../../images/ydgjgl.png" height="550" width="587"/>
                </div>
                <div className="div-b">
                    <p>
                    编号：<input name="aucSubject" type="text" value="" className="in" size="25"/>
                    经度：<input name="apgName" type="text" value=""  size="25"/><br/>
                    纬度：<input name="apgName" type="text" value=""  size="25"/>
                        <input className="btn" type="submit" value="搜索"/>
                    </p>
                    <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                        <tr>
                            <th width="4%">名称</th>
                            <th width="10%">编号</th>
                            <th width="12%">经度</th>
                            <th width="12%">纬度</th>
                            <th width="8%">通过光缆</th>
                            <th width="8%">管道空余量</th>
                        </tr>

                        <tr>
                            <td>3#</td>
                            <td>DM11</td>
                            <td>119.55'E</td>
                            <td>39.90'N</td>
                            <td>3</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>4#</td>
                            <td>DM12</td>
                            <td>119.54601216°</td>
                            <td>39.91304399°</td>
                            <td>2</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>6#</td>
                            <td>DM13</td>
                            <td>120.15'E</td>
                            <td>39.10'N</td>
                            <td>5</td>
                            <td>0</td>
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

            </div>
        )
    }
}
export default TubeWell;

