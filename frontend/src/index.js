import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api/status")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="app">
      <h1>DevOps Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
