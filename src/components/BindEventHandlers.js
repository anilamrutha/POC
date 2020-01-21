import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class BindEventHandlers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message:'Hello'
        }
        //this.clickHandler = this.clickHandler.bind(this);
    }
    // clickHandler(){
       
    //     this.setState ({
    //         message : 'New Message Here'
    //    })

    // }

    clickHandler =() =>{

        this.setState({
            message: 'good Bye Bye !'
        })
    }
    
    render() {
        return (
            <div>
                 <h2>{ this.state.message }</h2>
                
                {/* Using Bind keyword in render method*/}
                {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
                
                {/* Using Arrow Function in render Method*/}
                {/* <button onClick={()=> this.clickHandler()}>click</button>*/} 
                
                {/* Binding in Constructor  Method 
                  Most used method  */}
                 {/* <button onClick={this.clickHandler}>click</button>   */}  
                
                 {/* arrow Function as class property*/}
                <button onClick={this.clickHandler}>click</button>  
            </div>
        );
    }
}



export default BindEventHandlers;