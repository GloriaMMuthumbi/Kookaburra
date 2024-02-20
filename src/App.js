import './App.css';
import AboutUs from './Components/AboutUs';
import FeaturedProjects from './Components/FeaturedProjects';
import Footer from './Components/Footer';
import HeroSection from './Components/HeroSection';
import TheTeam from './Components/MeetTheTeam';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';

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
