import React, { useState } from "react";
import "../App.css";
import Logo from "../img/logo-couleur.png";

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

  const buttonStyle = {
    background: "indianred",
    color: "white",
  };

  return (
    <div className="login-container">
      <img
        src={Logo}
        width="40%"
        style={{ marginBottom: "20px" }}
        alt="this is an alternative text"
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChangeName}
          autoFocus
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handleChangePassword}
          required
        />
        <input
          type="submit"
          value="Enter"
          style={password !== "" ? buttonStyle : null}
        />
      </form>
    </div>
  );
}
