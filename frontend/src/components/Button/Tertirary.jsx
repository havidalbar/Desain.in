import React, { Component } from 'react';
import './button.scss';

class Tertirary extends Component {
render(){
    return(
        <button className="button tertirary">{this.props.text}</button>
    );
}
}

export default Tertirary;