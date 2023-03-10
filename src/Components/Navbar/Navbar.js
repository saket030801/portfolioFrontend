import  { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import './Navbar.css'




import  Home from '../Home/Home';
import  Music  from '../Music/Music';
import About from '../About/About';






export default function Navigation () {

    const [active, setActive] = useState("Home")

    return (  
      <>
        <Nav>
          <button onClick={()=> setActive("Home")}>Home</button>
          <button onClick={()=> setActive("About")}>About</button>
          <button onClick={()=> setActive("Music")}>Music</button>
        </Nav>

        <div>
          {active === "Home" && <Home/>}
          {active === "About" && <About/>}
          {active === "Music" && <Music/>}
        </div>
      </>    
    );
  
}
