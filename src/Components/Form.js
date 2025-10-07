import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:''
      }
    }
    changeuser=event=>{
        this.setState(
            {
                username:event.target.value
            }
        )
    }
    changecomment=event =>{
        this.setState(
            {

          
            comment:event.target.value
              }
        )
    }
     changetopic=event =>{
        this.setState(
            {

          
            topic:event.target.value
              }
        )
    }
    submitfrom=event=>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}` )
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.submitfrom}>
            <h1>Regsiterstion form</h1>
            <div>
            <label>Username:</label>
            <input type='text' onChange={this.changeuser} value={this.state.username}></input>
            </div>
            <br></br>
            <div>
                <label>Comments:</label>
                <textarea value={this.state.comment} onChange={this.changecomment}></textarea>
            </div>
            <div>
                <label>Select Topic</label>
                <select value={this.state.topic} onChange={this.changetopic}>
                    <option value="react">React</option>
                     <option value="angular">Angular</option>
                      <option value="Vue Js">Vue Js</option>
                </select>
            </div>
       <button>submit</button>
        
        </form>
        

      </div>
    )
  }
}

export default Form
