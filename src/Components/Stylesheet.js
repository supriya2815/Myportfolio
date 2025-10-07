import React from 'react'
import '../Assets/css/Style.css'

const c2={
  color:'black',
  
  
}

function Stylesheet(props) {
    let className=props.c1 ? "c1" :' '
  return (
    <div>
      <h1 className={className}>This is about how to apply exteranal css </h1>
      <h2 style={c2}>This is about how to apply inline css </h2>

    </div>
  )
}

export default Stylesheet
