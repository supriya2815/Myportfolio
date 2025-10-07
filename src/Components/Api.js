// import axios from 'axios'
// import React, { Component } from 'react'

//  class Api extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          posts:[]
//       }
//     }
//     componentDidMount()
//     {
//         axios.get("https://jsonplaceholder.typicode.com/posts")
//         .then(response=>{
//             console.log(response)
//             this.setState(
//                 {
//                     posts:response.data
//                 }
//             )
//         })
//         .then(error=>{
//             console.log(error)
//         })
//     }

//   render() {
//     const {posts}=this.state
//     return (
//       <div>
//         {
//             posts.length?
//             posts.map(post=><div key={post.id}>{post.title}</div>):
//             null
//         }
//       </div>
//     )
//   }
// }

// export default Api




import axios from "axios";
import React, { Component } from "react";

class Api extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="container mt-3">
        <h2 className="mb-3">Posts Table</h2>
        {posts.length ? (
          <table className="table table-bordered table-striped">
            <thead className="table-success">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  }
}

export default Api;

