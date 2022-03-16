import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name="Tamim Iqbal" roll="batsman"></Person>
      <Person name="Sakib al hasan" roll="all rounder"></Person>
      <Person name="Taskin Ahmed" roll="bowler"></Person>
      <Person name="Sikander raja" roll="ampiare"></Person>
      <h1>Hello Fan I'm from south africa
      </h1>
      <Friend job="survey" type="freelance"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.roll}</p>
    </div>
  )
}
function Friend(props) {
  return (
    <div className='person'>
      <h1>{props.job}</h1>
      <p>{props.type}</p>
    </div>
  )
}

export default App;
