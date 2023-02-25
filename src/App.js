import './App.css';
import ClaimsDisplayPage from './components/claims-display-page/ClaimsDisplayPage';

// import libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import CreateClaimPage from './components/CreateNewClaim/CreateClaimPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClaimsDisplayPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/new-claim' element={<CreateClaimPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
