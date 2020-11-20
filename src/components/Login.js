import React, { useState } from "react";
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
      <h1>Baby Stop</h1>
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
        <input type="submit" value="Enter" />
      </form>
    </div>
  );
}
