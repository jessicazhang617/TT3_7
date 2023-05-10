import './App.css';
import { Routes, Route } from 'react-router';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import { UserContextProvider } from './context/user.context';

function App() {
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
