import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header';
import Imagecontainer from './components/Imagecontainer';
import About from './components/About';
import Skills from './components/Skills';
import Courses from './components/Courses';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Imagecontainer/>
      <About/>
      <Courses/>
      <Skills/>
      
    </div>
    
  );
}

export default App;
