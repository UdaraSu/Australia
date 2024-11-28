import React, { useState } from "react";
import axios from "axios";

const Login = ({ setRole, setToken }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      setRole(res.data.role);
      setToken(res.data.token);
    } catch (err) {
      console.error(err.response.data.message);
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
            width: 100%;
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

      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
