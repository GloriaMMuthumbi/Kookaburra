import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import ServicesPage from './Components/Services Page/ServicesPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/services' element={<ServicesPage />} />
        </Routes>
    </Router>
    );
}

export default App;
