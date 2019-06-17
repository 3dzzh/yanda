import React, {Component} from 'react';
import '../../css/css.css';
class Header extends Component{
    handle = (a)=>{


    }
    render(){
        return(
            <div className="main">
                <div className='crumb'>
                    <a>工作台</a>&nbsp;>&nbsp;
                    <a onClick={()=>{this.props.second(this.props.text[0])}} >{this.props.text[0]}</a> &nbsp;&nbsp;&nbsp;&nbsp;
                    <a onClick={()=>{this.props.second(this.props.text[1])}} >{this.props.text[1]}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a onClick={()=>{this.props.second(this.props.text[2])}} >{this.props.text[2]}</a>
                </div>

            </div>
        )
    }
}
export default Header;