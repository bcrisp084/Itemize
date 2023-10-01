import { Checkbox } from "@mui/material";
import "./SigninForm.css";

const SigninForm = () => {
  return (
    <div className="form-container">
      <p className="title">Sign up</p>
      <form className="form">
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" placeholder="" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" placeholder="" />
          <label htmlFor="terms">
            <input type="checkbox" />I agree to the terms and conditions
          </label>
          <div className="forgot">
            <a rel="noopener noreferrer" href="#" className="forgot-link">
              Forgot Password ?
            </a>
          </div>
        </div>
        <button className="sign">Sign in</button>
      </form>
      <p className="login">
        Already have an account?
        <a rel="noopener noreferrer" href="#" className="login-link">
          Login
        </a>
      </p>
    </div>
  );
};

export default SigninForm;
