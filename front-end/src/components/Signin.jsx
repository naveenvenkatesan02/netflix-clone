import React, { useState } from "react";
import "./Signin.css";
import logo from "./Assests/netflix-logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PageTitle } from "./Utils/PageTitle";
function Signin() {
  PageTitle("Netflix Sign-in");
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submitHandler(e) {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/sign-up", {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.message === "Success") navigate("/netflix-home");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo} alt="logo" height={50} />
          </Link>
        </div>
      </div>
      <div className="form">
        <form className="form-main" onSubmit={submitHandler} action="POST">
          <h1>Sign In</h1>
          <input
            className="email"
            name="email"
            placeholder="Email or phone number"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
          <br />
          <button className="signin-btn" type="submit">
            Sign in
          </button>
          <br />
          <Link>Forgot Password?</Link>
          <p>
            New to Netflix? <Link to={"/register"}>Sign up now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signin;


