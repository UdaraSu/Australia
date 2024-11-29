import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");

  return (
    <Router>
      <Routes>
        {/* Login Route */}
        <Route
          path="/"
          element={
            !token ? (
              <Login setRole={setRole} setToken={setToken} />
            ) : (
              <Dashboard role={role} token={token} />
            )
          }
        />

        {/* Register Route */}
        <Route path="/register" element={<Register token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;
