import React, { useEffect, useState } from 'react';
import Dashboard from './components/Dashboard';
import './styles.css';

function App() {
  const [healthData, setHealthData] = useState([]);
 
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealthData(data));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to MedXplorers</h1>
      <Dashboard healthData={healthData} />
    </div>
  );
}

export default App;
