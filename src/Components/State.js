import React, { Component } from 'react'

 class State extends Component {
    constructor()
    {
        super()
        {
            this.state=
            {
                message:"Welcome to react js lecture"
            }
        }
    }
    ChangeMsg(){
        this.setState(
            {
                message:"Thank you for attend the lecture!"
            }
        )
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.ChangeMsg()}>ChangeMsg</button>
      </div>
    )
  }
}

export default State
