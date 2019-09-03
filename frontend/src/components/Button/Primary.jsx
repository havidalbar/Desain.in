import React, { Component } from 'react';
import './button.scss';

class Primary extends Component {
render(){
    return(
        <button className="button primary">{this.props.text}</button>
    );
}
}

export default Primary;