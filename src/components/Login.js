import React, { useState } from "react";
import baroque from "./../img/baroque.png";
import baroquefooter from "./../img/baroquefooter.png";
import "../App.css";

export default function Login({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setPassword("");
    setIsLoggedIn(true);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <img src={baroque} className="background-baroque login-top" alt="logo" />
      <h1>Baby Stop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
          required
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter your password"
          value={password}
          onChange={handleChangePassword}
          required
        />
        <input type="submit" value="Enter" />
      </form>
      <img
        src={baroquefooter}
        className="background-baroque login-bottom"
        alt="blablz"
      />
    </div>
  );
}
