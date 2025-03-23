import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import axios from "axios";
import "./Navbar.css"
import Logo from "../assets/mainlogo.png";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();  // ✅ Initialize navigate

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) return;

                const response = await axios.get(`http://localhost:5000/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            }
        };

        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("userId");
        setUser(null);
        navigate("/login");  // ✅ Redirect to login after logout
    };

    return (
        <nav className="navbar">
            {/* Left - Logo and Title */}
            <div className="logodiv">
                <img src={Logo} alt="Logo" onClick={() => window.location.href = "/home"} />
                <h2>SVECW Echoes</h2>
            </div>


            {/* Middle - Search Bar and Navigation Links */}
            <div className="nav-middle">
                <input type="text" placeholder="Search..." className="search-bar" />
                <Link to="/announcements" className="nav-link">Announcements</Link>
                <Link to="/events" className="nav-link">Events</Link>
                <Link to="/experiences" className="nav-link">Experiences</Link>
            </div>

            {/* Right - Menu */}
            <div className="nav-right">
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                {menuOpen && (
                    <div className="dropdown-menu">
                        <Link 
                            to="/profile" 
                            className="menu-item" 
                            onClick={() => setMenuOpen(false)} // ✅ Close menu on click
                        >
                            Profile
                        </Link>
                        <Link 
                            to="/about" 
                            className="menu-item"
                            onClick={() => setMenuOpen(false)} // ✅ Close menu on click
                        >
                            About Us
                        </Link>
                        <Link 
                            to="/terms" 
                            className="menu-item"
                            onClick={() => setMenuOpen(false)} // ✅ Close menu on click
                        >
                            Terms & Conditions
                        </Link>
                        <button onClick={handleLogout} className="logout">Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
