// App.js
import React from 'react';
import './App.css';
import LoginPage from './LoginPage'; // Import the LoginPage component

function App() {
  return (
    <div className="App">
      <main>
        <LoginPage /> {/* Render the LoginPage component */}
      </main>
    </div>
  );
}

export default App;
