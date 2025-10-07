// ProfileCard.js
import React from 'react'

function Bstudent({ name, age, city }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Age: {age}</p>
        <p className="card-text">City: {city}</p>
      </div>
    </div>
  )
}

export default Bstudent