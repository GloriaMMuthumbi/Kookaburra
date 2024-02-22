import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/Landing Page/LandingPage';
import ServicesPage from './Components/Services Page/ServicesPage';
import AboutUsPage from './Components/About Us Page/AboutUsPage';
import BlogsAndProjects from './Components/Blogs & Projects Page/Blogs&ProjectsPage';
import ContactUsPage from './Components/Contact Us Page/ContactUsPage';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about-us' element={<AboutUsPage />} />
          <Route path='/blogs-and-projects' element={<BlogsAndProjects />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
        </Routes>
    </Router>
    );
}

export default App;
