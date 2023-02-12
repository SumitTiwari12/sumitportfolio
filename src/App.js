import './App.css';
import AOS from 'aos';
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Protfoilo from "./Components/Portfoilo"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Skills from "./Components/Skill"

AOS.init({
  easing: "ease",
  duration: 1200,
  once: true,
});

function App() {
  return (
    <div className="App header">
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Protfoilo/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
