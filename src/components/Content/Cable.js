import React, {Component} from 'react';
class Cable extends Component{
    handleClick = ()=>{
        this.props.add(3)
    };

    render(){
        return(
            <div className="main">
                <div className='title1'>&nbsp;线缆类资源</div>
                <div className="title2">
                    <span>
                        <a  onClick={this.handleClick} className="btn">新增</a>
                        <a  className="btn">删除</a>
                    </span>
                </div>
                <div className="div-c">
                    <img src="../../images/ydxlgl.png"  height="550" width="579"/>
                </div>

                <div className="div-b">
                    <p>
                        编号：<input name="aucSubject" type="text" value="" className="in" size="25"/>
                        规格：<input name="apgName" type="text" value=""  size="25"/><br/>
                        起点：<input name="apgName" type="text" value=""  size="25"/>
                        终点：<input name="apgName" type="text" value=""  size="25"/>
                        <input className="btn" type="submit" value="搜索"/>
                    </p>
                    <table className="table_list" onmouseover="changeto();" onmouseout="changeback();" onclick="clickto();">
                        <tr>
                            <th width="8%">编号</th>
                            <th width="6%">规格</th>
                            <th width="12%">起点</th>
                            <th width="12%">终点</th>
                            <th width="12%">用途</th>
                            <th width="8%">建设时间</th>
                        </tr>

                        <tr>
                            <td>WP01</td>
                            <td>12芯</td>
                            <td>图书馆机房</td>
                            <td>信息馆机房</td>
                            <td>校园网一卡通</td>
                            <td>2019-05-09</td>
                        </tr>
                        <tr>
                            <td>WP07</td>
                            <td>24芯 </td>
                            <td>电气馆A楼机房</td>
                            <td>艺术学院机房</td>
                            <td>校园网一卡通</td>
                            <td>2019-05-12</td>
                        </tr>
                        <tr>
                            <td>WP23</td>
                            <td>48芯 </td>
                            <td>信息馆机房</td>
                            <td>电气馆A楼机房</td>
                            <td>校园网一卡通</td>
                            <td>2019-05-19</td>
                        </tr>
                        <tr>
                            <td>WP23</td>
                            <td>48芯 </td>
                            <td>信息馆机房</td>
                            <td>电气馆A楼机房</td>
                            <td>校园网一卡通</td>
                            <td>2019-05-19</td>
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
export default Cable;

