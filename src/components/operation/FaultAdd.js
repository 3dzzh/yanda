import React, {Component} from 'react';
class FaultAdd extends Component{
    handleClick = ()=>{
        this.props.back(0)
    }
    render(){

        return(

            <div className="main">

                <div className='crumb'><a>工作台</a>&nbsp;>&nbsp;<a onClick={this.handleClick} >故障</a>&nbsp;>&nbsp;新增故障信息</div>

                <div className="title1"><span><a onClick={this.handleClick}>&lt;&lt;返回</a></span><h1>新增故障信息</h1></div>

                <table className="table_form">

                    <tr>
                        <th><em>*</em>故障名称</th>
                        <td><input type='text'/></td>
                    </tr>
                    <tr>
                        <th><em>*</em>故障信息</th>
                        <td> <input type='text'/></td>
                    </tr>
                    <tr>
                        <td colspan="6" align="center">
                            <input type="submit" className="btn" value="提交"/>
                                <input type="hidden" id="auctionQuestion.qID" name="auctionQuestion.qID" value="1161"/>
                                    <input type="reset" className="btn" value="重设"/>
                                        <input type="hidden" name="struts.token.name" value="struts.token" />
                                        <input type="hidden" name="struts.token" value="LV4W1TMRAOBNU5M7X3WTTRG5AANJVQ9N" />
                        </td>
                    </tr>

                </table>
            </div>
        )
    }
}
export default FaultAdd;

