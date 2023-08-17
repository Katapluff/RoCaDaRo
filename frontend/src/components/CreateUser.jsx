import React, { useState } from "react";
import axios from "axios";

function CreateUser({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
    };

    axios
      .post("http://localhost:5032/user", newUser)
      .then((response) => {
        console.log("User created successfully");
        onSuccess();
      })
      .catch((error) => {
        console.log(error);
      });

    //
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateUser;
