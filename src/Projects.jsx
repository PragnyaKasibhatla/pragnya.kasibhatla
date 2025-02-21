import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Projects.css";
import "./Nav.css";
import "./Footer.css";
const Projects = () => {
    return (
        <>
            {/* <Navbar /> */}
            <div className="projects-container">
                <h1 className="title">Projects</h1>
                <div className="project">
                    <div className="content">
                        <h4>Project Name 01</h4>
                        I'm a paragraph. Click here to add your own text and
                        edit me. It is easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Iam a great place for you to tell a story and let
                        your users know a little more about you.
                    </div>
                    <img src="/p1.png" alt="project_1" />
                </div>
                <div className="project">
                    <div className="content">
                        <h4>Project Name 01</h4>
                        I'm a paragraph. Click here to add your own text and
                        edit me. It is easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Iam a great place for you to tell a story and let
                        your users know a little more about you.
                    </div>
                    <img src="/p1.png" alt="project_1" />
                </div>
                <div className="project">
                    <div className="content">
                        <h4>Project Name 01</h4>
                        I'm a paragraph. Click here to add your own text and
                        edit me. It is easy. Just click “Edit Text” or double
                        click me to add your own content and make changes to the
                        font. Iam a great place for you to tell a story and let
                        your users know a little more about you.
                    </div>
                    <img src="/p1.png" alt="project_1" />
                </div>
            </div>
            <div className="horizontal-divider"></div>
            {/* <Footer /> */}
        </>
    );
};

export default Projects;
