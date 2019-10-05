import React, { Component } from 'react';
import './button.scss';

class Button extends Component {
render(){
    return(
        <button className={this.props.style} >{this.props.text}</button>
    );
}
}

export default Button;