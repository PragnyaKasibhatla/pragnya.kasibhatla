import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Resume.css";
import "./Nav.css";
import "./Footer.css";
const Resume = () => {
    return (
        <>
            {/* <Navbar /> */}
            <main className="container">
                <h1 className="title">Resume</h1>

                <div className="section">
                    <div className="left">
                        <p>Skills</p>
                    </div>
                    <div className="right">
                        <div className="experience">
                            <div className="job">
                                <div className="role">
                                    <ul>
                                        <li>
                                            <strong>
                                                Programming Languages:
                                            </strong>{" "}
                                            JavaScript, TypeScript, Python,
                                            Java, C, C++, SQL (MySQL, Postgres),
                                            NoSQL (MongoDB)
                                        </li>
                                        <li>
                                            <strong>
                                                Frontend Frameworks & Libraries:
                                            </strong>{" "}
                                            Angular (RxJS), ReactJS (Redux,
                                            Context API), Material-UI, HTML,
                                            CSS3/SASS/LESS, Figma/Canva (UI/UX
                                            Designing), Responsive Web Design,
                                            Mermaid.js, Chart.js
                                        </li>
                                        <li>
                                            <strong>
                                                Backend Technologies:
                                            </strong>{" "}
                                            NodeJS, ExpressJS, RESTful APIs,
                                            Python (Django)
                                        </li>
                                        <li>
                                            <strong>DevOps & Tools:</strong>{" "}
                                            Kubernetes, Docker, Jenkins
                                        </li>
                                        <li>
                                            <strong>
                                                Version Control & Collaboration:
                                            </strong>{" "}
                                            Git/GitHub/GitLab, Scrum/Agile, Jira
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className="section">
                    <div className="left">
                        <p>
                            Work <br></br> Experience
                        </p>
                    </div>
                    <div className="right">
                        <div className="experience">
                            <div className="job">
                                <p className="date">2021 - Present</p>
                                <div className="role">
                                    <h2>Infosys</h2>
                                    <h3>Digital Specailist Engineer</h3>
                                    <p>
                                        <strong>
                                            Order Orchestration Team
                                        </strong>
                                    </p>
                                    <ul>
                                        <li>
                                            Developed and maintained five UI
                                            applications using Angular and
                                            React, integrating with Node.js REST
                                            APIs for broadband order
                                            orchestration.
                                        </li>
                                        <li>
                                            Optimized state management with
                                            NgRx, reducing API calls by 40% and
                                            improving data consistency.
                                        </li>
                                        <li>
                                            Enhanced Angular performance using
                                            Change Detection Strategies, lazy
                                            loading, and AOT, cutting UI load
                                            times by 50%.
                                        </li>
                                        <li>
                                            Upgraded Angular from v8 to v13,
                                            leveraging Ivy renderer and
                                            differential loading for an 85%
                                            performance boost.
                                        </li>
                                        <li>
                                            Migrated a legacy Angular app to
                                            React using micro frontends,
                                            reducing maintenance costs by 40%
                                            and improving scalability.
                                        </li>
                                        <li>
                                            Increased test coverage by 50% using
                                            Jasmine/Karma and automated CI/CD
                                            pipelines with Jenkins and AWS,
                                            cutting release cycles by 50%.
                                        </li>
                                        <li>
                                            Built a scalable Node.js backend on
                                            AWS using Lambda, EC2, and API
                                            Gateway, improving efficiency by 50%
                                            and responsiveness by 40%.
                                        </li>
                                    </ul>
                                    <p>
                                        <strong>Network Operations Team</strong>
                                    </p>
                                    <ul>
                                        <li>
                                            Developed Angular and React apps
                                            with Node.js APIs for real-time
                                            monitoring, increasing data
                                            accessibility by 40%.
                                        </li>
                                        <li>
                                            Optimized React performance using
                                            memoization and lazy loading,
                                            improving UI responsiveness by 35%.
                                        </li>
                                        <li>
                                            Implemented Redux and React Query to
                                            reduce redundant network requests by
                                            50% and enhance data consistency.
                                        </li>
                                        <li>
                                            Improved backend performance with
                                            SQL indexing and query optimization,
                                            cutting query execution time by 60%.
                                        </li>
                                        <li>
                                            Secured data with role-based access
                                            controls and enhanced system
                                            throughput by 35% through optimized
                                            workflows.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="horizontal-divider"></div>
                <div className="section">
                    <div className="left">
                        <p>Education</p>
                    </div>
                    <div className="right">
                        <div className="experience">
                            <div className="job">
                                <p className="date">2022 - 2023</p>
                                <div className="role">
                                    <h3>Full Stack Engineering</h3>
                                    <p>
                                        <strong>Bits Pilani WILP</strong>
                                    </p>
                                </div>
                            </div>
                            <div className="job">
                                <p className="date">2017 - 2021</p>
                                <div className="role">
                                    <h3>
                                        B-Tech in Computer Science Engineering
                                    </h3>
                                    <p>
                                        <strong>Andhra University</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Resume;
