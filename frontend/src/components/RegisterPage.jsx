import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';
import Navigator from "./Navigator.jsx";

function SignUp() {
    const [formData, setFormData] = useState({
        studentID: "",
        email: "",
        password: "",
        profession: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmitClick = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:5000/users/register", formData);
            alert("Registration successful!");
            navigate("/login");
        } catch (error) {
            alert("Error registering user");
            console.log(error);
        }
    };

    return (
        <>
            <Navigator /> {/*head navigator*/}
            <h1 className="h1">Sign Up Form</h1>
            <form className="form" onSubmit={handleSubmitClick}>
                <table>
                    <tr>
                        <td><label htmlFor="n">Student_ID</label></td>
                        <td><input type="text" name="studentID" placeholder="Enter your ID" onChange={handleChange} required /><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="m">Mail</label></td>
                        <td><input type="email" name="email" placeholder="Enter your mail" onChange={handleChange} required /><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="p">Password</label></td>
                        <td><input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required /><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="pf">Profession</label></td>
                        <td>
                            <select name="profession" onChange={handleChange} required>
                                <option value="">--Select--</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                            <br/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><button type="reset">Reset</button></td>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
            <p className="p">Already have an account? <Link to="/login">Login</Link></p>
        </>
    );
}

export default SignUp;
