import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: "React js state",
      names: ["Alice", "Bob", "Charlie"]
    }
    this.greetParent = this.greetParent.bind(this)
  }

  greetParent(childName) {
    
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
       
        {this.state.names.map((name) => (
          <Child
            key={name} 
            name={name} 
            greetHandler={this.greetParent} 
          />
        ))}
      </div>
    )
  }
}

export default Parent