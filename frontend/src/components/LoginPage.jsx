// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import './Form.css';
// import Navigator from "./Navigator.jsx";

// function Login({ setUser }) {  // <-- Accept setUser prop
//     const [formData, setFormData] = useState({
//         email: "",
//         password: ""
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmitClick = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/users/login", formData);

//             if (response.status === 200) {
//                 alert("Login successful!");
//                 console.log(response.data);

//                 setUser(response.data.user);  // <-- Store user in state instead of localStorage
//                 navigate("/home");  // Redirect to Profile page
//             } else {
//                 alert("Invalid credentials");
//             }
//         } catch (error) {
//             console.error("Error during login:", error.response ? error.response.data : error);
//             alert("Invalid credentials..");
//         }
//     };

//     return (
//         <>
//             <Navigator />
//             <h1 className="h1">Login Form</h1>
//             <form className="form" onSubmit={handleSubmitClick}>
//                 <table>
//                     <tbody>
//                         <tr>
//                             <td><label htmlFor="m">Mail</label></td>
//                             <td><input type="email" name="email" placeholder="Enter your mail" onChange={handleChange} required /></td>
//                         </tr>
//                         <tr>
//                             <td><label htmlFor="p">Password</label></td>
//                             <td><input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required /></td>
//                         </tr>
//                         <tr>
//                             <td><button type="reset">Reset</button></td>
//                             <td><button type="submit">Submit</button></td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </form>
//             <p className="p">Don't have an account? <Link to="/register">Sign Up</Link></p>
//         </>
//     );
// }

// export default Login;


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';
import Navigator from "./Navigator.jsx";

function Login({ setUser }) {  // <-- Accept setUser prop
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

        // 🔹 Check if the login is for admin
        if (formData.email === "admin@svecw.edu.in" && formData.password === "svc123") {
            alert("Admin login successful!");
            navigate("/admin"); // Redirect to Admin Page
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/users/login", formData);

            if (response.status === 200) {
                alert("Login successful!");
                console.log(response.data);

                setUser(response.data.user);  // <-- Store user in state instead of localStorage
                navigate("/home");  // Redirect to Home page
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Error during login:", error.response ? error.response.data : error);
            alert("Invalid credentials..");
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
