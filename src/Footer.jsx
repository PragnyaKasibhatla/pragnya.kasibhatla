import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-section">
                <span>
                    <h3>Phone</h3>
                </span>
                <span>+91-9949350041</span>
            </div>

            <div className="footer-section">
                <span>
                    <h3>Email</h3>
                </span>
                <span>kasibhatlapragnya@gmail.com</span>
            </div>

            <div className="footer-section">
                <span>
                    <h3>Follow me</h3>
                </span>
                <span>
                    <a
                        href="https://www.linkedin.com/in/pragnya-kasibhatla"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            className="social-media"
                            src="/linkedin.svg"
                            alt="linkedin"
                        ></img>
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
