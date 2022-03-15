import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h1>Hello Fan I'm from south africa
      </h1>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person'>
      <h1>Sakib all hasan</h1>
      <p>All rounder</p>
    </div>
  )
}
function Friend() {
  return (
    <div className='person'>
      <h1>Tamim Khan</h1>
      <p>I hate them</p>
    </div>
  )
}

export default App;
