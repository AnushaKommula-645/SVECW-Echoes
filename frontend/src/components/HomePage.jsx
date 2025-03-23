import { useState, useEffect } from "react";
import Navbar from "./navbar.jsx";
import "./HomePage.css";
import clg1 from "../assets/clg1.jpeg";
import clg2 from "../assets/clg2.jpeg";
import clg3 from "../assets/clg3.jpeg";

const images = [clg1, clg2, clg3];
 
  

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Changes image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <Navbar />
      <div className="carousel">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`slide ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>
      <div className="welcome-text">
        <h1>Welcome to Our SVECW Echoes</h1>
        <p>"Welcome to SVECW Echoes – The Voice of Our Campus!🗣️ of Shri Vishnu Engineering College for Women is a place where innovation meets opportunity, and svecwEchoes is your go-to platform for staying connected with everything happening around you. From exciting student-led events and insightful interview experiences to important campus announcements, we bring you the latest updates in one place. Whether you’re looking to participate in a club activity, stay informed about upcoming celebrations, or gain inspiration from your peers' experiences, svecwEchoes ensures that you never miss a beat. Join us in creating a vibrant and engaged campus community!✨"</p>
        
      </div>
    </div>
  );
}

export default HomePage;
