import React, { Component } from 'react'

 class Updating extends Component {
    //method 1
    constructor(props) {
      super(props)
    
      this.state = {
           name:'shivtej'
      }
      console.log('updating phase!!!!')
    }
      
    static getDerivedStateFromProps(props,state){
        console.log('life cycle of getderivedstatefromprpos')
        return null
    }
    componentDidUpdate()
    {
        console.log('lifecycle of  componentDidupdate ')
      
    }
     shouldComponentUpdate()
     {
        console.log('life ofshouldComponentUpdate ')
        return true
     }
  render() {
    console.log('lifecycle of Render()')
    return (
      <div>
        <button onClick={this.changestate}>change state</button>
      </div>
    )
  }
}

export default Updating
