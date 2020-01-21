import React from 'react';
import './Mystyle.css'

function StylingCss(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={className}>style sheet</h1>
        </div>
    );
}


export default StylingCss;