import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header">
            <div className="name-role">
                <div className="cn">
                    <div className="circle"></div>
                    <Link to="/" className="name">
                        Pragnya Kasibhatla
                    </Link>
                </div>
                <span className="role">Full-Stack Developer</span>
            </div>

            {/* Hamburger Button (Visible Only on Small Screens) */}
            <button className="hamburger" onClick={() => setIsOpen(true)}>
                ☰
            </button>

            {/* Full-Screen Menu Overlay */}
            <div className={`overlay ${isOpen ? "show" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    ✖
                </button>
                <nav className="overlay-menu">
                    <Link to="/resume" onClick={() => setIsOpen(false)}>
                        Resume
                    </Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>
                        Projects
                    </Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Contact
                    </Link>
                </nav>
            </div>
            {!isOpen && (
                <nav className="nav">
                    <Link to="/resume">RESUME</Link>
                    <img src="/divider.svg" alt="divider" />
                    <Link to="/projects">PROJECTS</Link>
                    <img src="/divider.svg" alt="divider" />
                    <Link to="/contact">CONTACT</Link>
                </nav>
            )}
        </header>
    );
}

export default Navbar;
