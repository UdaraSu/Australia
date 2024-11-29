import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "Admin",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/register", formData);
      alert("Registration successful! Please login.");
      navigate("/");
    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
      setError(err.response?.data?.message || "An error occurred during registration.");
    }
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
          }

          form {
            max-width: 400px;
            margin: 50px auto;
            padding: 30px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }

          input {
            width: 95%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            outline: none;
            transition: border-color 0.3s ease;
          }

          input:focus {
            border-color: #5e81f4;
          }

          button {
            width: 100%;
            padding: 12px;
            background-color: #5e81f4;
            border: none;
            border-radius: 8px;
            color: white;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            margin-top: 20px;
          }

          button:hover {
            background-color: #4d6fb1;
          }

          h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 32px;
          }
            
          already-acc {
            margin-top: 20px;
          }

          select {
            width: 100%;
            padding: 12px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            background-color: #fff;
            color: #333;
            appearance: none;
            outline: none;
            transition: border-color 0.3s ease, box-shadow 0.3s ease;
          }

          select:focus {
            border-color: #5e81f4;
            box-shadow: 0 0 4px rgba(94, 129, 244, 0.5);
          }

          option {
            font-size: 16px;
            padding: 8px;
            background-color: #fff;
            color: #333;
          }

          .error {
            color: red;
            margin-top: 10px;
            text-align: center;
          }

          @media (max-width: 768px) {
            form {
              margin: 20px;
              padding: 20px;
            }

            input,
            button {
              font-size: 14px;
            }
          }
        `}
      </style>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <select name="role" onChange={handleChange} required>
          <option value="Admin">Admin</option>
          <option value="Financial Planner">Financial Planner</option>
          <option value="Mortgage Broker">Mortgage Broker</option>
        </select>
        <button type="submit">Register</button>
        {error && <div className="error">{error}</div>}
        <div style={{ marginTop: "10px" }}>
          <Link to="/">Already have an account? Login here.</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
