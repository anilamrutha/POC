import React from 'react';


const PropsExample = props => {
 //console.log(props);
//props are immutable
 return (
     <div>
            <h1>Props Example {props.name} Gender is {props.gender}</h1>
            { props.children }
     </div>
) 
}
export default PropsExample 