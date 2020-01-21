import React, { Component } from 'react';

class PropsInCLassComponent extends Component {
    render() {
      
        return (
            <div>
                <h1>Welcome { this.props.name } Gender is {this.props.gender} </h1>
            </div>
        );
    }
}

export default PropsInCLassComponent;