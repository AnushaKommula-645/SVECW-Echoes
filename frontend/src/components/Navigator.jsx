import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Navigator.css";
import Logo from "../assets/mainlogo.png";

function Navigator() {
    const navigate = useNavigate(); // Hook for navigation

    return (
        <nav>
            <div className="logodiv">
                <img src={Logo} alt="Logo" />
                <h2>SVECW Echoes</h2>
            </div>

            <div className="btn-div">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
            </div>
        </nav>
    );
}

export default Navigator;
