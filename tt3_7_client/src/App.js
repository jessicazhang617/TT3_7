import './App.css';
import Button from './components/Button/Button'
import ClaimsTable from './components/HomePage/ClaimsTable/ClaimsTable'
import LoginPage from './pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router';
function App() {

  const info = {
    status: 'Accepted',
    project_id: 1,
    claim_id: 1,
    currency: 'SGD'
  }

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>

    </div>
  );
}

export default App;
