import React, { Component } from 'react'

export class PostMethod extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userID:'',
       title:'',
       body:''
    }
  }
  changeHandler=e=>
  {
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler=e=>{
    e.preventDefault()
    console.log(this.state)
  }
  
  render() {
    const{userID,title,body}=this.state
    return (
      <div>
        <form method='POST' onSubmit={this.submitHandler}>
          <div>
            <input type='text' name='userID' placeholder='Enter your ID'
            value={userID} onChange={this.changeHandler}></input>
          </div>
           <div>
            <input type='text' name='title' placeholder='Enter your title'
            value={title} onChange={this.changeHandler}></input>
          </div>
           <div>
            <input type='text' name='body' placeholder='Enter your body'
            value={body} onChange={this.changeHandler}></input>
          </div>
          <button>submit</button>

        </form>
      </div>
    )
  }
}

export default PostMethod
