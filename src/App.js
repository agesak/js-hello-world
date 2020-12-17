import Student from './components/Student';
import Logo from './components/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h1>Ada Students!</h1>
      </header>
      <main>
        <Student fullName="Improved Ada" email="improved-ada@ada.org"/>
      </main>
    </div>
  );
}

export default App;
