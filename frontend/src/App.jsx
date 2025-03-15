import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigator from "./components/Navigator"; // Ensure the correct path
import LoginPage from "./components/LoginPage"; // Create this component
import RegisterPage from "./components/RegisterPage"; // Create this component
import LandingPage from "./components/LandingPage"; // Your main page

function App() {
    return (
        <Router>
            <Navigator /> {/* Fixed navigation bar */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;
