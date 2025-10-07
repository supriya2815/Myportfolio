import React from 'react'

function FunctionClick() {
    function clickhandler()
    {
      alert("this is click event using function")
    }

  return (
    <div>
      <button onClick={clickhandler}>Function button</button>
    </div>
  )
}

export default FunctionClick
