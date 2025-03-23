import Navbar from './Navbar.jsx';

function HomePage() {
    return (
        <div style={{ paddingTop: "80px" }}> {/* Adjust this value based on your Navbar height */}
            <Navbar />
            <h1>Welcome to Home Page!</h1>
        </div>
    );
}

export default HomePage;
