import React, {Component} from 'react';
class CableAdd extends Component{
    handleClick = ()=>{
        this.props.back(0)
    }
    render(){

        return(

            <div className="main">

                <div className='crumb'><a>工作台</a>&nbsp;>&nbsp;<a onClick={this.handleClick} >管井类资源</a>&nbsp;>&nbsp;新增管井类资源信息</div>

                <div className="title1"><span><a onClick={this.handleClick}>&lt;&lt;返回</a></span><h1>新增管井类资源信息</h1></div>

                <table class="table_form">

                    <tr>
                        <th width="35%"><em>*</em>编号</th>
                        <td width="65%"><input type='text'/></td>
                    </tr>
                    <tr>
                        <th width="35%">经度</th>
                        <td width="65%"> <input type='text'/></td>
                    </tr>
                    <tr>
                        <th>纬度</th>
                        <td><input type='text'/></td>
                    </tr>

                    <tr>
                        <th>通过光缆</th>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <th>管道空余量</th>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <td colspan="6" align="center">
                            <input type="submit" class="btn" value="提交"/>
                                <input type="hidden" id="auctionQuestion.qID" name="auctionQuestion.qID" value="1161"/>
                                    <input type="reset" class="btn" value="重设"/>
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

