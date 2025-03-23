import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; 
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";  // Import Profile component
import Terms from "./components/terms";
import Aboutus from "./components/Aboutus";

function App() {
    const [user, setUser] = useState(null);  // 🔹 Store logged-in user globally

    return (
        <Router>
            <Routes>
                {/* Pages without Navbar */}
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage setUser={setUser} />} />  {/* 🔹 Pass setUser to update state */}
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Pages with Navbar */}
                <Route path="/home" element={<WithNavbar><HomePage /></WithNavbar>} />
                <Route path="/profile" element={<WithNavbar><Profile user={user} /></WithNavbar>} /> {/* 🔹 Pass user */}
                <Route path="/about" element={<WithNavbar><Aboutus /></WithNavbar>} /> 
                <Route path="/terms" element={<WithNavbar><Terms /></WithNavbar>} /> 
            </Routes>
        </Router>
    );
}

// Wrapper Component to Include Navbar
function WithNavbar({ children }) {
    return (
        <>
            <Navbar />  
            {children}
        </>
    );
}

export default App;
