import './App.css';
import Button from './components/Button/Button'
import ClaimsTable from './components/HomePage/ClaimsTable/ClaimsTable'
import LoginPage from './pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import { UserContextProvider } from './context/user.context';

function App() {

  const info = {
    status: 'Accepted',
    project_id: 1,
    claim_id: 1,
    currency: 'SGD'
  }

  return (
    <div className="App">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </UserContextProvider>
    </div>
  );
}

export default App;
