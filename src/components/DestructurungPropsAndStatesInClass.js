import React, { Component } from 'react';

class DestructurungPropsAndStatesInClass extends Component {
 
    render() {

        const {name, gender} = this.props

        return (
            <div>
                 <h1> Hello My Name is  {name} gender is { gender }</h1>
            </div>
        );
    }
}

export default DestructurungPropsAndStatesInClass;