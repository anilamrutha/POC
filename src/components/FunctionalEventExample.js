import React from 'react';

function FunctionalEventExample() {
    function clickHandler(){
        alert('click Handler');
    }
    return (
      
         <div>
             <button onClick={clickHandler}>Click</button>
         </div>

    )  
}

//const Functionalcomponet = () => <h1>Arrow Fumctions Example in Functional componets!</h1>
export default FunctionalEventExample 