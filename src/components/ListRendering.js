import React from 'react';
import Person from './Person';

function ListRendering(props) {
 const names = ['anilkumar','Amrutha', 'yadav']
 const persons = [
    {
      id: 1,
      name: 'Bruce',
      age: 30,
      skill: 'React'
    },
    {
      id: 2,
      name: 'Clark',
      age: 25,
      skill: 'Angular'
    },
    {
      id: 3,
      name: 'Diana',
      age: 28,
      skill: 'Vue'
    }
  ]
 const namelist = names.map(name => <h2>{ name }</h2>)
 const personList = persons.map(person => <Person  person={person} />)
// const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
 //return <div>{nameList}</div>
    return (
        <div>
    {/**************   Regular Rendering data**************/}
           {/* {names[0]}
           {names[1]}
           {names[2]} */}


     {/*****************Using Map Method****************** */}
           {
              //names.map(name => <h2>{ name }</h2>)
              personList
           }
         {/********************** Rules When to use key******************** 
          * the items in your list do not have a unique id
          * the list is a static list and will not chnage
          * the list will never be reordered or filterd
         */}
        
        </div>
    );
}

export default ListRendering;