import logo from './logo.svg';
import './App.css';
import HomePage from './components/Homepage';
import ProjectPage from './components/Projectpage';
import Header from './components/Pages/Header';
import Rout from './components/Router/Rout';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* Welcome */}
      {/* <HomePage/> */}
      {/* <ProjectPage/> */}
      {/* <Header/> */}
    <Rout/>
    </div>
  );
}

export default App;
