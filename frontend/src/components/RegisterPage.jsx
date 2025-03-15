import {Link, useNavigate} from "react-router-dom";
import './Form.css';

function SignUp() {

    const tdstyle = {
        paddingRight: "8px",
    }

    //submit button navigation to login
    const navigate = useNavigate();

    const handleSubmitClick = (event) => {
        event.preventDefault();
        navigate("/");
    };

    return (
        <>
            <h1 className="h1">Sign Up Form</h1>
            <form className="form" onSubmit={handleSubmitClick}>
                <table>
                    <tr>
                        <td><label htmlFor="n">Name</label></td>
                        <td><input type="text" id="n" placeholder="Enter your name" required/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="m">Mail</label></td>
                        <td><input type="email" id="m" placeholder="Enter your mail" required/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="p">Password</label></td>
                        <td><input type="password" id="p" placeholder="Enter your password" required/><br/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="pf">Profession</label></td>
                        <td>
                            <select id="pf" required>
                                <option value="">--Select--</option>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </select>
                            <br/>
                        </td>
                    </tr>
                    
                    <tr>
                        <td><button type="reset">Reset</button></td>
                        <td style={tdstyle}><button type="submit" >Submit</button></td>
                    </tr>
                </table>
                               
                
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </>
    );
}

export default SignUp;
