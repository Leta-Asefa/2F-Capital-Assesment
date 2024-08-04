import { useState } from "react";
import FloatingLabelInput from "../helper_components/FloatingLabelInput";
import Logo from "../helper_components/Logo";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [location, setLocation] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [acceptCheckBox, setAcceptCheckBox] = useState(false)


    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)
    const handleConfirmPasswordChange = (event) => setConfirmPassword(event.target.value)
    const handleLocationChange = (event) => setLocation(event.target.value)
    const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value)
    const handleAcceptCheckBoxChange = (event) => setAcceptCheckBox(!event.target.value)


    return (

        <div className="signup-container bg-gray-800">

            <div className="signup-left">
                <img src="black_logo.svg" className="w-64 mx-auto " alt="logo" />
            </div>

               <div className="signup-right">
                    <Logo src="blue_logo.svg"/>
                    <h1 className="signup-right-header">Signup into Book Rent</h1>

                    <form>

                        <FloatingLabelInput label="Email Address" type="text" value={email} onChange={handleEmailChange} id="emailInput" />
                        <FloatingLabelInput label="Password" type="password" value={password} onChange={handlePasswordChange} id="passwordInput" />
                        <FloatingLabelInput label="Confirm Password" type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} id="confirmPasswordInput" />
                        <FloatingLabelInput label="Location" type="text" value={location} onChange={handleLocationChange} id="locationInput" />
                        <FloatingLabelInput label="Phone Number" type="text" value={phoneNumber} onChange={handlePhoneNumberChange} id="phoneNumberInput" />

                        <div className="inline-block space-x-2">
                            <input type="checkbox" value={acceptCheckBox} onChange={handleAcceptCheckBoxChange} className="ml-3 rounded-none" />
                            <label>I Accept The Terms And Changes</label>
                        </div>

                        <input type="submit" value="SIGN UP" className="submit-button" />

                    </form>
                    <h1 className="text-center w-full p-4 text-sm">Already have an account ? <Link to="/login" className="text-secondary">Login</Link></h1>

                </div>
            
        </div>
    );
}

export default SignUp;