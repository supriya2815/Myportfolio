import React, { Component } from 'react'

 class ClassClick extends Component {
    Classclick()
    {
        alert("this is click event using class componet")
    }

  render() {
    return (
      <div>
        <button onClick={this.Classclick}>Class button</button>
      </div>
    )
  }
}

export default ClassClick
