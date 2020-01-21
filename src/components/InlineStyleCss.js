import React, { Component } from 'react';

class InlineStyleCss extends Component {
   heading = {
        fontSize: '72px',
        color: 'blue'
      }
    render() {
        return (
            <div>
                <h1 style={this.heading}>Inline Style Examples</h1>
            </div>
        );
    }
}

export default InlineStyleCss;