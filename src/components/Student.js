import React from 'react';

const Student = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.fullName}</h3>
      <ul>
        <li>Class: C13</li>
        <li>Birthday: December 10th, 1815</li>
        <li>Email: {props.email}</li>
      </ul>
    </div>
  );
};

export default Student;