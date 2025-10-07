import React from "react";

function Profilecard({ name, age, city }) {
  return (
    <div className="card" style={{ width: "18rem", margin: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Age: {age}</h6>
        <p className="card-text">City: {city}</p>
      </div>
    </div>
  );
}

export default Profilecard;
