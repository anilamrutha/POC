import React from 'react';

function ChildmethodAsProps(props) {
    return (
        <div>
          {/*  <button onClick={props.greetHandler}>Greet Parent</button>*/}
        {/* Passing parameter through arroe unction */}
        <button onClick={()=> props.greetHandler('test data')}>Child Button</button>
        </div>
    );
}

export default ChildmethodAsProps;