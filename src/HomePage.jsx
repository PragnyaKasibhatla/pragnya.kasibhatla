import "./HomePage.css";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function HomePage() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 300); // 2 seconds delay

        return () => clearTimeout(timer);
    }, []);

    const slideUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <div className="home-page-container">
            <div className="intro">
                <motion.img
                    src="/girl-employee2.png"
                    alt="profile-pic"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={slideUpVariants}
                />
                <motion.div
                    className="content"
                    initial="hidden"
                    animate={animate ? "visible" : "hidden"}
                    variants={slideUpVariants}
                >
                    <p className="hello">Hello!</p>
                    <h2>
                        <strong>I'm Pragnya.</strong>
                    </h2>
                    <p className="bio">
                        I'm a Full-Stack Developer who speaks fluent JavaScript
                        and dreams in React, Angular and NodeJS. With 3 years of
                        experience, I build web apps that load faster than your
                        morning coffee brews! 🚀
                    </p>
                    <motion.div
                        className="circles"
                        initial="hidden"
                        animate={animate ? "visible" : "hidden"}
                        variants={slideUpVariants}
                    >
                        <motion.div
                            className="circle1"
                            variants={slideUpVariants}
                        >
                            <Link to="/resume">
                                <p>
                                    <strong>Resume</strong>
                                </p>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="circle2"
                            variants={slideUpVariants}
                        >
                            <Link to="/projects">
                                <p>
                                    <strong>Projects</strong>
                                </p>
                            </Link>
                        </motion.div>
                        <motion.div
                            className="circle3"
                            variants={slideUpVariants}
                        >
                            <Link to="/contact">
                                {" "}
                                <p>
                                    <strong>Contact</strong>
                                </p>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default HomePage;
