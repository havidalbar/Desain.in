import React, { Component } from 'react';
import { Button } from 'antd';
import './button.scss';

class ButtonAntd extends Component {
render(){
    return(
        <Button className={this.props.style}>{this.props.text}</Button>
    );
}
}

export default ButtonAntd;