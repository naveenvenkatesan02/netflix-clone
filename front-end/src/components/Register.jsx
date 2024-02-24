import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assests/netflix-logo.png";
import axios from "axios";
import { PageTitle } from "./Utils/PageTitle";
function Register() {
  PageTitle('Netflix Register')
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  async function submitHandler(e) {
    e.preventDefault();

    await axios
      .post("https://netflix-clone-api-jrzp.onrender.com/register", {
        name,
        email,
        phone,
        password,
      })
      .then((res) => {
        console.log(res);
        navigate("/sign-in");
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
        <form className="form-main" onSubmit={submitHandler}>
          <h1>Sign Up</h1>
          <input
            className="name"
            name="name"
            placeholder="Username"
            type="text"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            className="email"
            name="email"
            placeholder="Email"
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="phone-no"
            name="phone"
            placeholder="Phone"
            type="phone no"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
          <br />
          <input
            className="password"
            name="password"
            placeholder="Password"
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <br />
          <button className="signin-btn" type="submit">
            Sign up
          </button>
          <br />
          <p>
            Existing User? <Link to={"/sign-in"}>Sign in now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
