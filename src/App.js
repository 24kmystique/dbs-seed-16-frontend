import './App.css';
import ClaimsDisplayPage from './components/claims-display-page/ClaimsDisplayPage';
import ViewClaim from './components/claim-details/ViewClaim';

// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<ClaimsDisplayPage />} />
          <Route path="/view-claim" element={<ViewClaim />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
