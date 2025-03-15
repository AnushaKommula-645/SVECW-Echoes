import React from "react";
import "./LandingPage.css";
import Navigator from "./Navigator.jsx";


const LandingPage = () => {

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetSection = document.getElementById("events"); // Target section ID
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  //violet
  const clr1 = {
    color: "white",
    background: "rgba(164,35,143,255)",
    height: "50px",
    display: "flex", // Enables flexbox
    alignItems: "center", // Centers text vertically
    justifyContent: "center", // Centers text horizontally
    textAlign: "center", // Ensures text alignment
    borderRadius: "5px" // Optional: Adds rounded corners
  };
  

  //green
  const clr2 = {
    background: "rgba(167,206,57,255)",
    color: "white",
    height: "50px",
    display: "flex", // Enables flexbox
    alignItems: "center", // Centers text vertically
    justifyContent: "center", // Centers text horizontally
    textAlign: "center", // Ensures text alignment
    borderRadius: "5px" // Optional: Adds rounded corners
  };

  //orange
  const clr3 = {
    background : "rgba(245,130,33,255)",
    color: "white",
    height: "50px",
    display: "flex", // Enables flexbox
    alignItems: "center", // Centers text vertically
    justifyContent: "center", // Centers text horizontally
    textAlign: "center", // Ensures text alignment
    borderRadius: "5px" // Optional: Adds rounded corners
    
  };

  return (
    <div className="landing-page">

      <Navigator /> {/*head navigator*/}

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          {/* <img src={collegeLogo} alt="College Logo" className="logo" /> Fixed image */}
          <h1>Welcome To SVECW Echoes</h1>
          
          
          {/* <p>Your one-stop destination for college events, celebrations, and experiences!</p> */}
          <a href="#events" className="scroll-btn" onClick={handleScroll}>Explore More ↓</a>
        </div>
      </section>

      {/* Other Sections */}
      <section id="events" className="section">
        <h2 style={clr1}>Upcoming Events</h2>
        <p>Stay updated with all the exciting events happening at our college.</p>
      </section>

      <section id="clubs" className="section">
        <h2 style={clr2}>Student Clubs</h2>
        <p>Join a variety of student-run clubs and enhance your college experience.</p>
      </section>

      <section id="interviews" className="section">
        <h2 style={clr3}>Interview Experiences</h2>
        <p>Read and share real interview experiences to guide your juniors.</p>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>Reach out for queries and collaborations.</p>
        <p><strong>Email:</strong> svecw@svecwechoes.edu.in</p>
        <p><strong>Phone:</strong> +91 98765 43210, +91 91234 56789</p>
      </section>

      {/* About Us Section at the Bottom */}
      <section id="about" className="section" style={{ marginTop: "50px", textAlign: "center",color: "white" , background: "linear-gradient(to right, rgba(164,35,143,255), rgba(167,206,57,255))"}}>
        <h2>About Us</h2>
        <p>SVECW Echoes is a platform dedicated to bringing students together through events, clubs, and shared experiences.</p>
      </section>
    </div>
  );
};

export default LandingPage;
