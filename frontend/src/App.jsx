import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigator from "./components/Navigator"; 
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import LandingPage from "./components/LandingPage";
import AdminDashboard from "./components/AdminDashboard"; 

const isAuthenticated = () => {
    return localStorage.getItem("token") ? true : false;
};

function App() {
    return (
        <Router>
            <Navigator />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                {/* <Route path="/admin" element={isAuthenticated() ? <AdminDashboard /> : <Navigate to="/login" />} /> */}
            </Routes>
        </Router>
    );
}

export default App;
