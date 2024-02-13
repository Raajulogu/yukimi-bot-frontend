import './App.css';
import { Route, Routes } from 'react-router';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App bg-">
      <Routes>
        <Route
        path='/'
        element={<Dashboard/>}
        />
      </Routes>
    </div>
  );
}

export default App;
