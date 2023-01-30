import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return ( 
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyCenter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                            <img src="./image/logo.png" />
                            </div>
                            <ul className="footerCircles">
                                <li><FaFacebookF className="footerIcon"/></li>
                                <li><FaInstagram className="footerIcon"/></li>
                                <li><FaGithub className="footerIcon"/></li>
                                <li><FaLinkedin className="footerIcon"/></li>

                            </ul>
                            <div className="copy-right-content">
                                <p className="copyright">Copyright{new Date().getFullYear()} | All Rights ar reserved. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Footer;