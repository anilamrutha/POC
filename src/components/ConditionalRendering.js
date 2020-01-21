import React, { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true
        }
    }
    
    render() {
        //******************* * Conditional Rendering **********************************
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             welcome anil
        //         </div>
        //     );
        // }else{
        //     return (
        //         <div>
        //             welcome Srinu
        //         </div>
        //     );
        // }


        //*********************Element Variable Approach**************
        //  let message
        // if(this.state.isLoggedIn){
        //     message = <div> welcome anil </div>
        
        // }else{
        //     message = <div> welcome ramu </div>
        // }
        // return <div>{message}</div>

        //************************Ternari Conditional Operator************************
        // return  this.state.isLoggedIn ? (
        //     <div> welcome anil </div>
        //     ) : (
        //         <div> welcome ramu </div>
        //     )


            //*****************short Circute  mehod************************/
        
              return  this.state.isLoggedIn && <div>welcome anil</div>


    }
}

export default ConditionalRendering;