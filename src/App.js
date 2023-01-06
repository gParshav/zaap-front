
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
       <Navbar/>
           <Routes>   
             <Route exact path="/" element={<About />} />
             <Route path="/home" element={<Home />} />
           </Routes>
         </Router>
      
    </div>
  );
}

export default App;
