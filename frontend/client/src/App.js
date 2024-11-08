import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_API_URL || 'http://3.135.1.59:5000'; 
    console.log('Backend URL:', backendUrl);  // Add this line to confirm the API URL
    fetch(`${backendUrl}/`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);
  

  return (
    <div className="App">
      <h1>Hello from the Frontend 6!</h1>
      <p>Backend Message: {message}</p>
    </div>
  );
}

export default App;
