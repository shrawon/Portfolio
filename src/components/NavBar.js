import React from "react";
import { FaAlignJustify} from 'react-icons/fa';
import logo from '../img/logo.png';

function NavBar(){
const {state, setState} = React.useState(true);
return(

<nav className="navbar">
 <div className="conatiner">
    <div className="navbar_container">
        <ul className="navbar_left">
            <div className="navbar_1-left-logo">
                <img src={logo} alt="" />
            </div>
        </ul>
       
            <ul className="navbar_right">
                <li><a href="Home">Projects</a></li>
                <li><a href="Services">Services</a></li>
                <li><a href="About">About</a></li>
                <li><a href="Skills">Skills</a></li>
                <li><a href="Contact">Contact</a></li>
            </ul>
       
    </div>
  </div>
    <div className="toggle" onClick = {() => setState(!state)}>
        <FaAlignJustify />
    </div>

</nav>

    )
}

export default NavBar;