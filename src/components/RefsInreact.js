import React, { Component } from 'react';

class RefsInreact extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = element =>{
            this.cbRef = element
        } 
    }
    
        componentDidMount() {
         // this.textInput.focus();
         if(this.cbRef){
                this.cbRef.focus()
         }
        }
        clickHandler = () =>{
            alert(this.setCbRef);
        }
        render() {
          return (
            <div>
              <div>
                <input
                  defaultValue="It will not focus"
                />
              </div>
              <div>
                <input
                  ref={(input) => { this.textInput = input; }}
                  defaultValue="with focus"
                />
                <input type="text" ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
              </div>
            </div>
          );
        }
}

export default RefsInreact;