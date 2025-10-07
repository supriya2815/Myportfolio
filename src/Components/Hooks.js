import React, { useState } from 'react'

function Hooks() {
    // const [color ,setColor]=useState("red")
    // const [count ,setCount]=useState(0)




    //method 1**************how to set state
     const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");




  //method 2*****************multiple data set in state
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

const updateColor = () => {
  setCar(previousState => {
    return { ...previousState, color: "blue" }
  });
}
  return (
    <div>
      {/* <h1>My favorite color is {color} !</h1>
      <button onClick={()=>setColor("blue")}>change</button>&emsp;
        <button onClick={()=>setColor("pink")}>change1</button>&emsp;
          <button onClick={()=>setColor("black")}>change2</button>&emsp;
            <button onClick={()=>setColor("purple")}>change3</button>

            <h1>count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Incerment</button>&emsp;
    <button onClick={()=>setCount(count-1)}>Decerment</button> */}
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    <h1>My { car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
   <button onClick={updateColor}>change</button>
    </div>
  )
}

export default Hooks
