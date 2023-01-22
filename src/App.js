
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import { useState } from 'react';

function App() {
  const [profile, setProfile] = useState();
  const [dark, setDark] = useState(true)
  return (
    <div className="App">
        <Router>
       <Navbar profile={profile} setDark={setDark}/>
           <Routes>   
             <Route exact path="/" element={<About dark={dark}/>} />
             <Route path="/home" element={<Home dark={dark}/>} />
             <Route path="/login" element={<Login profile={profile} dark={dark} setProfile={setProfile}/>} />
           </Routes>
         </Router>
      
    </div>
  );
}

export default App;
