import React from "react";
import Image from '../img/headerImg.png';


function Header () {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header-section">
                                <h2>Hello, I Am </h2>
                                <h1>Shrawon Roka</h1>
                                <p>I am an professional react developer</p>
                                <div className="header_buttons">
                                    <a href="header" className="btn btn-outline">
                                        Hire me
                                    </a>
                                </div>
                            </div>                       
                        </div>
                    </div>                 
                </div>
            </div>
        </header>
    )
}

export default Header;
