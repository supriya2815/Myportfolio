import React, { Component } from 'react'

class Mounting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:'shivtej'
       
    }
       console.log('name is the : ',this.state.name)

  }
  static getDerivedStateFromProps(props,state)
  {
    console.log('the props are: ',props.dename)
    console.log('the state is : ',state.name)
    return null
       
  }
  componentDidMount(){
    console.log('this is the component did mount()')
  }
  render() {
    console.log('this is the render()')
    return (
      <div>
        
      </div>
    )
  }
}

export default Mounting
