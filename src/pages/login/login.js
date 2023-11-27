import React from "react";
import "./login.css";
import Btn from "../../assets/components/btn/btn";

const Login = ({ setScreen }) => {
  return (
    <div className="form2">
      <div class="form-box">
        <form class="form">
          <span class="title">Login</span>
          <span class="subtitle">Log in to your account</span>
          <div class="form-container">
            
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button>Login</button>
        </form>
        <div class="form-section">
          <p>Don't have an account? </p>
          <Btn press={() => setScreen(1)} title="Sign up" />
        </div>
      </div>

     
    </div>
  );
};
export default Login;
