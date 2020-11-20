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

  return (
    <div className="login-container">
      <img src={Logo} width="40%" style={{ marginBottom: "20px" }} />

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
    </div>
  );
}
