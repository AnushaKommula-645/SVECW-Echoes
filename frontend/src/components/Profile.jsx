import { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.css";

function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userId = localStorage.getItem("userId");
                if (!userId) {
                    setLoading(false);
                    return;
                }

                const response = await axios.get(`http://localhost:5000/users/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            {loading ? <p>Loading user details...</p> : user ? (
                <div className="profile-card">
                    <p><strong>Student ID:</strong> {user.studentID}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Profession:</strong> {user.profession}</p>
                </div>
            ) : <p>No user found. Please log in.</p>}
        </div>
    );
}

export default Profile;
