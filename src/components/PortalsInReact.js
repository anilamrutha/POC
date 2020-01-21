import React from 'react';
import ReactDOM from 'react-dom';

function PortalsInReact() {
    return ReactDOM.createPortal (
            <h1>portals Examples</h1>,
            document.getElementById('portal-root')
    );
}

export default PortalsInReact;  