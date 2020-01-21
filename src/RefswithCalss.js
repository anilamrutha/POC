import React, { Component } from 'react';

class RefswithCalss extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }

    focusInputFun(){
        this.inputRef.focus()
      }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}

export default RefswithCalss;