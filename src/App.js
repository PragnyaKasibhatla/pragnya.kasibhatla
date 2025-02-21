import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./HomePage";
import Resume from "./Resume";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Nav.css";
import "./Footer.css";

const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.4, ease: "easeIn" } },
};

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<MotionPage Component={HomePage} />} />
                <Route
                    path="/resume"
                    element={<MotionPage Component={Resume} />}
                />
                <Route
                    path="/projects"
                    element={<MotionPage Component={Projects} />}
                />
                <Route
                    path="/contact"
                    element={<MotionPage Component={Contact} />}
                />
            </Routes>
        </AnimatePresence>
    );
}

function MotionPage({ Component }) {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeVariants}
        >
            <Component />
        </motion.div>
    );
}

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <AnimatedRoutes />
                <div className="horizontal-divider"></div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
