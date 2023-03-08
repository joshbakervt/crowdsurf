import './App.css';
import React from 'react';
// import logi
import Login from './Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          crowdsurf
        </h1>
        <h3>
          a new way to know your audience
        </h3>
        // button that links to login page
        <a
          className="App-link"
          href="/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
    </div>
  );
}

export default App;
