import React, { useState } from "react";
import axios from "axios";

const Register = ({ token }) => {
  const [formData, setFormData] = useState({ username: "", password: "", role: "Admin" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("User registered successfully!");
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
      <select name="role" onChange={handleChange}>
        <option value="Admin">Admin</option>
        <option value="Financial Planner">Financial Planner</option>
        <option value="Mortgage Broker">Mortgage Broker</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
