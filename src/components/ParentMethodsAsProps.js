import React, { Component } from 'react';
import ChildmethodAsProps from './ChildmethodAsProps';

class ParentMethodsAsProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parentName: 'My Parent Name Here'
        }
        this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent = (childName)=> {
        alert(`hello anil ${this.state.parentName} form ${ childName } `);
    }

    render() {
        return (
            <div>
                <ChildmethodAsProps  greetHandler={this.greetParent}/>
              {/*  <h>helo anil</h>
                <button onClick={this.greetParent}>click</button>   */}
            </div>
        );
    }
}

export default ParentMethodsAsProps;