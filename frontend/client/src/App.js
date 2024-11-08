import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch message from the backend (directly from the root of the backend)
    const backendUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000'; // Fallback to localhost if not set

    fetch(`${backendUrl}/`)  // Assuming the backend directly returns the message at the root endpoint
      .then(response => response.json())
      .then(data => setMessage(data.message))  // Assuming the response is a JSON object with the 'message' field
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="App">
      <h1>Hello from the Frontend  yo!</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}

export default App;
