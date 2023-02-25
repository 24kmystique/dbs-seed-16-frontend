import './App.css';
import ClaimsDisplayPage from './components/claims-display-page/ClaimsDisplayPage';
import ViewClaim from './components/claim-details/ViewClaim';

// import libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage/LoginPage';
import CreateClaimPage from './components/CreateNewClaim/CreateClaimPage';
import { GlobalStyles } from "@mui/material";

function App() {
  return (
    <div>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "#f2f0f0" },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClaimsDisplayPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/new-claim' element={<CreateClaimPage />} />
          <Route path="/claims/:id" element={<ViewClaim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
