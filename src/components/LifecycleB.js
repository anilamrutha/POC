import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'Vishwas'
        }
      console.log('LifecycleB Constructor');
      
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
    render() {
        console.log('this is Rendir Method')
        return <div>this is LifecycleB </div>
    }
}



export default LifecycleB;