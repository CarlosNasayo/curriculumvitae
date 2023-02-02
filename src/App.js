import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header';
import Imagecontainer from './components/Imagecontainer';
import About from './components/About';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Experience from './components/Experience';

import Education from './components/Education';
function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <Imagecontainer/>
      <About/>
      <Courses/>
      <Skills/>
      <Experience/>
      <Education/>

      
    </div>
    
  );
}

export default App;
