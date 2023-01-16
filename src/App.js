
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [profile, setProfile] = useState();
  return (
    <div className="App">
        <Router>
       <Navbar profile={profile}/>
           <Routes>   
             <Route exact path="/" element={<About />} />
             <Route path="/home" element={<Home />} />
             <Route path="/login" element={<Login profile={profile} setProfile={setProfile}/>} />
           </Routes>
         </Router>
      
    </div>
  );
}

export default App;
