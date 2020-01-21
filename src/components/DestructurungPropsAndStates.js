import React from 'react';

//const DestructurungPropsAndStates = ({name, gender}) => <h1> My Name is  {name} gender is { gender }</h1>
const DestructurungPropsAndStates = props =>{
    const {name, gender} = props
    return (
    <div>
        <h1> My Name is  {name} gender is { gender }</h1>
    </div>

    )
}
export default DestructurungPropsAndStates 

