import "./Aboutus.css"; 
import Logo from "../assets/logo.png";

function Aboutus() {
    return (
        <div>
            <center>
                <div className="card">
                    <img src={Logo} alt="logo image" />
                    <h2>About Us</h2>
                    <p>Welcome to SVECW Echoes! This platform is designed for the students of Shri Vishnu Engineering College for Women (SVECW) to stay informed and engaged with campus activities. Here, students can share important announcements, upcoming events, and personal experiences to help build a strong and connected community. Whether it's club activities, academic discussions, or career insights, SVECW Echoes serves as a space for collaboration, inspiration, and growth. Stay updated, share your experiences, and be a part of the vibrant SVECW community! 🚀✨</p>
                    <p><strong>Email:</strong> svecw@svecwechoes.edu.in</p>
                    <p><strong>Phone:</strong> +91 98765 43210, +91 91234 56789</p>
                </div>
            </center>
        </div>
    );
}

export default Aboutus;
