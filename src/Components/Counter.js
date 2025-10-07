import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    inceremnt()
    {
        this.setState(
            {
                count:this.state.count+5
            }
        )
    }
     deceremnt()
    {
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
  render() {
    return (
      <div>
    <h1>count:{this.state.count}</h1>
    <button onClick={()=>this.inceremnt()}>Incerment</button>&nbsp;
     <button onClick={()=>this.deceremnt()}>Decerment</button>
      </div>
    )
  }
}

export default Counter
