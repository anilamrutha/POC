import React, { Component } from 'react';
import EventBindingClassExample from './EventBindingClassExample';

class FormsHandling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            comment: ''
        }
    }
    
    handleUserNameChange =(event) =>{
        this.setState ({
            username: event.target.value
        })
    }
    handleComment=(event)=>{
         this.setState({
             comment: event.target.value
         })
         
    }
    handleSelect =(event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefalut()
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.username} onChange={this.handleUserNameChange} />
                     <textarea value={this.state.comment} onChange={this.handleComment}></textarea>
                   <select value={this.state.topic} onChange={this.handleSelect}>
                       <option>react</option>
                       <option>angular</option>
                       <option>Vuejs</option>
                   </select>
                   <button>submit</button>
                </form>
            </div>
        );
    }
}

export default FormsHandling;