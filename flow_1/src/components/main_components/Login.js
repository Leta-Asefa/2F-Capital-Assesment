import { useState } from "react";
import FloatingLabelInput from "../helper_components/FloatingLabelInput";
import Logo from "../helper_components/Logo";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)


    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)
    const handleRememberMeChange = (event) => setRememberMe(!event.target.value)


    return (
        <div className="login-container bg-gray-800">

            <div className="login-left">
                <img src="black_logo.svg" className="w-64 mx-auto " alt="logo" />
            </div>

            <div className="login-right">
            <Logo src="blue_logo.svg"/>
                <h1 className="login-right-header">Login into Book Rent</h1>

                <form>

                    <FloatingLabelInput label="Email Address" type="text" value={email} onChange={handleEmailChange} id="emailInput" />
                    <FloatingLabelInput label="Password" type="password" value={password} onChange={handlePasswordChange} id="passwordInput" />
                    <div className="inline-block space-x-2">
                        <input type="checkbox" value={rememberMe} onChange={handleRememberMeChange} className="ml-3 rounded-none" />
                        <label>Remember Me</label>
                    </div>
                   <input type="submit" value="LOGIN" className="submit-button"/>
                </form>
                <h1 className="text-center w-full p-4 text-sm">Have not an account ? <Link to="/signup" className="text-secondary">Sign Up</Link></h1>

            </div>

        </div>
    );
}

export default Login;