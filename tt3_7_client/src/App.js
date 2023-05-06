import './App.css';
import Button from './components/Button/Button'
import ClaimsTable from './components/HomePage/ClaimsTable/ClaimsTable'
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  const info = {
    status: 'Approved',
    project_id: 1,
    claim_id: 1,
    currency: 'SGD'
  }

  return (
    <div className="App">

      <LoginPage />

    </div>
  );
}

export default App;
