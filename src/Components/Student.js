import React from 'react'
import StudentCard from './StudentCard'

function Student() {
  const students = [
    { id: 1, name: "Alice", grade: "A" },
    { id: 2, name: "Bob", grade: "B" },
    { id: 3, name: "Charlie", grade: "A+" },
  ]

  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <StudentCard 
          key={student.id} 
          name={student.name} 
          grade={student.grade} 
        />
      ))}
    </div>
  )
}

export default Student