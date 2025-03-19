import {Link, useNavigate} from "react-router-dom";
import './Form.css';

function Login() {

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
            <h1 className="h1">Login Form</h1>
            <form className="form" onSubmit={handleSubmitClick}>
                <table>
                    <tr>
                        <td><label htmlFor="m">Mail</label></td>
                        <td><input type="email" id="m" placeholder="Enter your mail" required/><br/></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="p">Password</label></td>
                        <td><input type="password" id="p" placeholder="Enter your password" required/><br/></td>
                    </tr>
                    
                    <tr>
                        <td><button type="reset">Reset</button></td>
                        <td style={tdstyle}><button type="submit" >Submit</button></td>
                    </tr>
                </table>
                               
                
            </form>
            <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
        </>
    );
}

export default Login;
