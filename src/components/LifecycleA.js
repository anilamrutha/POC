import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Vishwas'
        }
      console.log('lifecycleA Constructor');
      
    }
    static getDerivedStateFronProps(props, state){
        console.log('getDerivedStateFronProps Method');  
        return null   
    }
    componentDidMount(){
        console.log('componentDidMount Method');
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate Method');  
        return true  
    }
    getSnapshotBeforeUpdate(){
        console.log('getSnapshotBeforeUpdate Method');
        return null  
    }
    componentDidUpdate(){
        console.log('componentDidUpdate Method');
    }
    changeState = () =>{
        this.setState({
            name: 'Amrutha Anilkumar'
        })
    }
    render() {
        console.log('this is Rendir Method')
        return (
        <div>
            <h1>this is LifecycleA </h1>
            <button onClick={this.changeState}>Chnage State</button>
            <LifecycleB></LifecycleB>
        </div>)
    }
}



export default LifecycleA;