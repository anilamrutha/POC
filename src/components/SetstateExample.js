import React, { Component } from 'react';

class SetstateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
             count: 0
        }
        
    }
    increament(){
    /* this.state.count = this.state.count + 1; 
     console.log(this.state.count); */
     /*this.setState({
         count: this.state.count + 1
     },()=>{
           console.log('callback Value:', this.state.count)
     })  */
     
     this.setState((prevState)=>({
             count: prevState.count + 1
     }))
     console.log(this.state.count)
    }
     
    increamentFive(){

        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()

    }
    render() {
        return (
            <div>
    <             h1>{ this.state.count}</h1>
    <button onClick={()=> this.increamentFive()}> Increament</button>
            </div>
        );
    }
}

export default SetstateExample;