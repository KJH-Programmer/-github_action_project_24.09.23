import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')  // 프록시를 통해 localhost:5000/api/hello로 요청
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{message ? message : "Loading..."}</p>
      </header>
    </div>
  );
}

export default App;
