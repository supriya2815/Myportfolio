import React, { Component } from 'react'

 class Constclick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"Hello this is click event"
      }
    }
    Clickconst(){
        this.setState(
            {
                message:"Hello this is click event using constuctor with blind"
            }
        )
    }
  render() {
    return (
        
      <div>
         <style>
            {`
            body{
            padding-top:30px;
            background-color:pink;
            font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

            }
            h3{
                color:red;
            }
                button{
                padding:5px;
                 background-color:black;
                 color:white;
                 
                
                }
                `}
        </style>
       
        <h3>{this.state.message}</h3>
        <button onClick={this.Clickconst.bind(this)}>blind click</button>

      </div>
    )
  }
}

export default Constclick
