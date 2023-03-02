
import './App.css';
import Postcard from './postcard';
import Link from './link';
function App() {

  return (

    <div className="App">
      <header className="App-header">
        <div className="card-container">
      <Postcard 
      name="Barack Obama"
      jobTitle="President"
      text={`teeeeeeeeext`}
    />
    <Postcard
    name="Michael Jordan"
    jobTitle="Basketball player"
    text={`teeeeeeeeext`}
    />
      </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
  <Link />

      </header>
    </div>
  );
}

export default App;
