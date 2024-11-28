// import React, { useState } from "react";
// import axios from "axios";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
//       setMessage("Password reset link sent to your email.");
//     } catch (err) {
//       setMessage("Error: " + (err.response ? err.response.data.message : "Server error"));
//     }
//   };

//   return (
//     <div>
//       <style>
//         {`
//           /* Add styling similar to the Login page */
//           /* ... */
//         `}
//       </style>

//       <h1>Forgot Password</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <button type="submit">Submit</button>
//       </form>

//       {message && <div>{message}</div>}
//     </div>
//   );
// };

// export default ForgotPassword;
