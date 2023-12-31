import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../AuthLayout/Layout";
import FormField from "../../../components/formField/formField";
import "./ForgetPassWord.css";
import "./ResetPassword.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgetPassWord = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      // Send email to the server for password reset
      const response = await axios.post(
        "https://easyinvoiceapi.onrender.com/api/Auth/ForgotPassword",
        { email }
      );
      console.log(response.data);
      // Save email to local storage before making the API request
      localStorage.setItem('forgottenPasswordData', JSON.stringify({ email }));

      navigate("/resetPassword"); // Navigate to ResetPassword component
    } catch (error) {
      console.error("Error sending forgot password request:", error);
      setMessage("An error occurred. Please try again later.error:", error);
    }
  };

  return (
    <div className="forgetPasswordlayout-wrappper">
      <Layout>
        <div className="forgetPassword-form-control">
          <h3>Forget Password</h3>
          <form onSubmit={handleForgetPassword}>
            {/* Email Input */}
            <div>
              <FormField
                htmlFor={"email"}
                type={"email"}
                inputName={"email"}
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <p>{message}</p>
            {/* Submit button */}
            <button type="submit" className="recoveryLink-btn">
              Send Recovery Link
            </button>
          </form>

          {/* Registration link */}
          <button className="forgetPassword-logIn-btn">
            <Link to="/signIn">Back to Sign In</Link>
          </button>
        </div>
      </Layout>
    </div>
  );
};

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);



  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      // Retrieve stored email from local storage
      const forgottenPasswordData = JSON.parse(localStorage.getItem('forgottenPasswordData'));


      
       // Send password reset token, email, and new password to the server
       await axios.post('https://easyinvoiceapi.onrender.com/api/Auth/ResetPassword', {
        email: forgottenPasswordData.email,
        password,
        token: confirmPassword,
      });
     // Clear the data from local storage after successful password reset
     localStorage.removeItem('forgottenPasswordData');

      // Navigate to the success page after a accountActivated
      navigate("/accountActivated");
    } catch (error) {
      console.error("Error resetting password:", error);
      setMessage("Error resetting password:", error);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="resetPasswordlayout-wrappper">
      <Layout>
        <div className="resetPassword-form-control">
          <h3>Reset Password</h3>
          <form onSubmit={handleResetPassword}>

            <div style={{ position: "relative" }}>
              <FormField
                htmlFor={"password"}
                type={showPassword ? "text" : "password"}
                inputName={"password"}
                placeholder={"Enter your new password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "14%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <FormField
                htmlFor={"password"}
                type={showPassword ? "text" : "password"}
                inputName={"password"}
                placeholder={"confirm your new Password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "14%",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>
            <p>{message}</p>
            {/* Submit button */}
            <button type="submit" className="recoveryLink-btn">
              Reset
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export { ForgetPassWord, ResetPassword };
