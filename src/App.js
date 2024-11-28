import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [role, setRole] = useState("");
  const [token, setToken] = useState("");

  if (!token) {
    return <Login setRole={setRole} setToken={setToken} />;
  }

  return (
    <div>
      <h1>CRM System</h1>
      {role === "Admin" && <Register token={token} />}
      <Dashboard role={role} token={token} />
    </div>
  );
};

export default App;
