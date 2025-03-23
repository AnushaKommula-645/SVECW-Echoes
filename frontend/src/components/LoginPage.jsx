import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';
import Navigator from "./Navigator.jsx";

function Login({ setIsLoggedIn }) {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitClick = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/login", formData);
            
            if (response.status === 200) {
                alert("Login successful!");
                console.log(response.data);

                // localStorage.setItem("userId", response.data.user._id);  // Store user ID
                // setIsLoggedIn(true);
                navigate("/home");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            alert("Invalid credentials..");
            console.log(error);
        }
    };

    return (
        <>
            <Navigator />
            <h1 className="h1">Login Form</h1>
            <form className="form" onSubmit={handleSubmitClick}>
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="m">Mail</label></td>
                            <td><input type="email" name="email" placeholder="Enter your mail" onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="p">Password</label></td>
                            <td><input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><button type="reset">Reset</button></td>
                            <td><button type="submit">Submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <p className="p">Don't have an account? <Link to="/register">Sign Up</Link></p>
        </>
    );
}

export default Login;
