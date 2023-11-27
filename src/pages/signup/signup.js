import React from "react";
import "./signup.css";
import Btn from "../../assets/components/btn/btn";

const Signup = ({ setScreen }) => {
  return (
    <div className="form1">
      <div class="form-box">
        <form class="form">
          <span class="title">Sign up</span>
          <span class="subtitle">Create a free account with your email.</span>
          <div class="form-container">
            <input type="text" class="input" placeholder="Full Name" />
            <input type="email" class="input" placeholder="Email" />
            <input type="password" class="input" placeholder="Password" />
          </div>
          <button>Sign up</button>
        </form>
        <div class="form-section">
          <p>Have an account? </p>
          <Btn
            press={() =>{
                setScreen(0);

            }}
            title="Login"
             
             />
        </div>
      </div>
    </div>
  );
};
export default Signup;
