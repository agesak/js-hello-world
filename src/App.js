import React from 'react';
import StudentCollection from './components/StudentCollection';
import Logo from './components/Logo';
import './App.css';

const students = [
  {
    fullName: "Ada Lovelace",
    email: "ada@lovelace.uk",
  },
  {
    fullName: "Katherine Johnson",
    email: "kat@nasa.gov",
  },
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Ada Students!</h1>
      </header>
      <main>
        <StudentCollection students={students}/>
      </main>
    </div>
  );
}

export default App;
