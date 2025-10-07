import React from 'react'

function StudentCard(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Grade: {props.grade}</p>
    </div>
  )
}

export default StudentCard