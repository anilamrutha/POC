 import React, { Component } from 'react';
import RefswithCalss from '../RefswithCalss';
 
 class Focusinput extends Component {
     constructor(props) {
         super(props);
         this.componentRef = React.createRef()
     }
     clickHandler =() =>{
         this.componentRef.focusInputFun()
     }
     
     render() {
         return (
             <div>
                  <RefswithCalss ref={this.componentRef}/>
                  <button onClick={this.clickHandler}>Foucs Button</button>
             </div>
         );
     }
 }
 
 export default Focusinput;