import React from 'react';

function ErrorBoundary1({heroname}) {
    if(heroname =='Joker'){
        throw new console.error('hero error');
        
    }
    return (
        <div>
            {heroname}
        </div>
    );
}

export default ErrorBoundary1;