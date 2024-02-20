import './App.css';
import AboutUs from './Components/LandingPage/AboutUs';
import FeaturedProjects from './Components/LandingPage/FeaturedProjects';
import Footer from './Components/Footer';
import HeroSection from './Components/LandingPage/HeroSection';
import TheTeam from './Components/LandingPage/MeetTheTeam';
import Services from './Components/LandingPage/Services';
import WhyChooseUs from './Components/LandingPage/WhyChooseUs';

function App() {
  return (
      <div className='App'>
        <HeroSection />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <FeaturedProjects />
        <TheTeam />
        <Footer />
      </div>
    );
}

export default App;
