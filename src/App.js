import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Feature from './components/Feature';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
function App() {
  return (
    <div className="test">
      <Navbar/>
      <Slider/>
      <Feature/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
