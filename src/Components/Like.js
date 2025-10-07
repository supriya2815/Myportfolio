import React, { Component } from 'react'

export class Like extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         like:0
      }
    }

    increment(){
        this.setState({
            like:this.state.like+1
        })
    }
    
  render() {
    return (
      <div>
        <style>
         {`
         button{
          font-size:30px;
          background-color:black;
          color:white;
         }
         `
  }
        </style>

        

        <h3>POST: {this.props.title}| Like : {this.state.like}</h3>
        <button onClick={()=>this.increment()}>Like</button>
      </div>
    )
  }
}

export default Like
