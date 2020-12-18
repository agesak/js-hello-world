import React from 'react';
import Student from './Student';

const StudentCollection = (prop) => {
  console.log(prop)

  const studentComponents = prop.students.map((student) =>{
    return(
      <Student
      fullName={student.fullName}
      email={student.email}
      birthdate={student.birthdate}
      key={student.email}
      />
    )
  })

  return(
    <ul>
      {studentComponents}
    </ul>
  )
}

export default StudentCollection;