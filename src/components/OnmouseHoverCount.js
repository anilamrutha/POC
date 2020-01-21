import React, { Component } from 'react';

class OnmouseHoverCount extends Component {
constructor(props) {
    super(props);
    this.state = {
        count :0
    }
}
  incrementCount = () =>{
      this.setState(prevState =>{
          return {count: prevState.count + 1}
      })
  }

    render() {
        const {count} = this.state
        return (
            <div>
    <button onMouseOver={this.incrementCount}>Clicked {count} Times</button>   
            </div>
        );
    }
}

export default OnmouseHoverCount;