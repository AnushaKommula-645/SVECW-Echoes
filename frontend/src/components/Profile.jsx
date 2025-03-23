import "./Profile.css";
import profile from "../assets/profile-icon.jpg";

function Profile({ user }) {  // <-- Accept user as a prop
    return (
        <center>
            <div className="card">
                <img src={profile} alt="profile pic" className="image" />
                <h2>User Profile</h2>
                {user ? (
                    <div>
                        <p><strong>Student ID:</strong> {user.studentID}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Profession:</strong> {user.profession}</p>
                    </div>
                ) : (
                    <p>No user found. Please log in.</p>
                )}
            </div>
        </center>
    );
}

export default Profile;
