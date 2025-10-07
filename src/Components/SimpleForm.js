import React from "react";

function SimpleForm() {
  return (
    <div>
      <h2 style={{ textAlign: "center" ,color:"red",marginTop:"20px",fontWeight:"bold"}}>Registration Form</h2>
      <div className="form1" style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <form  style={{border:"1px solid black" ,padding:"20px 10px",width:"400px",backgroundColor:"gray"}}>
          
          <div style={{ marginBottom: "10px" }}>
           
            <input type="text" required placeholder=" Enter First Name"/>
          </div>

          <div style={{ marginBottom: "10px" }}>
          
            <input type="text" required placeholder=" Enter Last Name"/>
          </div>

          <div style={{ marginBottom: "10px" }}>
            
            <input type="email" required placeholder=" Enter Email"/>
          </div>
           <div style={{ marginBottom: "10px" }}>
           
            <input type="text" required placeholder=" Enter Address"/>
          </div>

          <div style={{ marginBottom: "10px" }}>
          
            <input type="tel" required placeholder=" Enter Phone No"/>
          </div>
          
           <div style={{ marginBottom: "10px" }}>
           
            <input type="password" required placeholder=" Enter Password"/>
          </div>
           <div style={{ marginBottom: "10px" }}>
            
            <input type="password" required placeholder=" Enter Confirm-Password"/>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Gender : </label>
            <input type="radio" name="gender" /> Male
            <input type="radio" name="gender" /> Female
            <input type="radio" name="gender" /> Other
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Birth Date: </label>
            <input type="date" required />
          </div>

          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default SimpleForm;