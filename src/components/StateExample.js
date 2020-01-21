import React, { Component } from 'react';


class StateExample extends Component {

    constructor() {
        super();
        this.state ={
            message: 'welcome for state example!'
        }
    }
    changeMessage(){
        this.setState({
          message: 'changing the prevoius data'  
        })
    }
    render() {
        return (
            <div>
              {/* <h2>state examples</h2>*/}  
                        <h2>{ this.state.message }</h2>
                        <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default StateExample;