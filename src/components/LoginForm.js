import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    setUsername("");
    setPassword("");
    navigate("/main");
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        name="username"
        type="text"
        placeholder="Enter Username"
        value={username}
        required
        onChange={(e) => setUsername(e.target.value)}
      />
      <div></div>
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        name="password"
        type="password"
        placeholder="Enter Password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <div>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </div>
    </form>
  );
}
