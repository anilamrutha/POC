import React, { Component } from 'react';

class EventBindingClassExample extends Component {
 clickHandler12(){
        alert('click Handler in class Example!');
    }
    render() {
        return (
            <div>
               <button onClick={this.clickHandler12}>Click me</button>
            </div>
        );
    }
}

export default EventBindingClassExample;