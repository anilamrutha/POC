import React, { Component } from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

class Parentcomp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'amrutha'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Anilkumar'
            })
            }, 2000)
        }
    
    render() {
        console.log('Parent Component data');
        
        return (
            <div>
               <RegComp name={this.state.name} />
               <PureComp name={this.state.name} />
            </div>
        );
    }
}

export default Parentcomp;