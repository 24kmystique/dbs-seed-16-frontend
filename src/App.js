import './App.css';
import ClaimsDisplayPage from './components/claims-display-page/ClaimsDisplayPage';

// import libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClaimsDisplayPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
