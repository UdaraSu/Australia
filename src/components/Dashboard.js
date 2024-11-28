import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = ({ role, token }) => {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    serialNumber: "",
    clientName: "",
    clientAddress: "",
    clientContact: "",
    amount: "",
    assignedTo: "",
  });

  const fetchTickets = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tickets", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTickets(res.data);
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/tickets/create", formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Ticket created successfully!");
      fetchTickets();
    } catch (err) {
      console.error(err.response.data.message);
    }
  };

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f7fc;
            margin: 0;
            padding: 0;
            color: #333;
          }

          h1, h2 {
            text-align: center;
            margin-bottom: 20px;
          }

          div {
            max-width: 1000px;
            margin: 30px auto;
            padding: 20px;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          }

          h1 {
            font-size: 32px;
            color: #2c3e50;
          }

          h2 {
            font-size: 26px;
            color: #34495e;
            margin-top: 30px;
          }

          form {
            display: grid;
            gap: 15px;
            margin-bottom: 30px;
          }

          input {
            padding: 12px;
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

          .ticket-cards {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            padding: 0;
            margin: 0;
          }

          .ticket-card {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .ticket-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .ticket-card h3 {
            font-size: 20px;
            color: #2c3e50;
            margin-bottom: 10px;
          }

          .ticket-card p {
            margin: 8px 0;
            color: #7f8c8d;
            font-size: 14px;
          }

          .ticket-card span {
            font-weight: bold;
            color: #2c3e50;
          }

          .ticket-card .amount {
            color: #e74c3c;
            font-size: 18px;
            margin-top: 10px;
          }

          .ticket-card .status {
            padding: 6px 12px;
            background-color: #2ecc71;
            color: white;
            border-radius: 5px;
            font-size: 14px;
            text-align: center;
            width: fit-content;
          }

          @media (max-width: 768px) {
            div {
              margin: 20px;
              padding: 15px;
            }

            form {
              grid-template-columns: 1fr;
            }

            input,
            button {
              font-size: 14px;
            }
          }
        `}
      </style>

      <h1>{role} Dashboard</h1>
      {role === "Financial Planner" && (
        <form onSubmit={handleSubmit}>
          <input name="serialNumber" placeholder="Serial Number" onChange={handleChange} required />
          <input name="clientName" placeholder="Client Name" onChange={handleChange} required />
          <input name="clientAddress" placeholder="Client Address" onChange={handleChange} required />
          <input name="clientContact" placeholder="Client Contact" onChange={handleChange} required />
          <input name="amount" type="number" placeholder="Amount" onChange={handleChange} required />
          <input name="assignedTo" type="number" placeholder="Assign To" onChange={handleChange} required />
          <button type="submit">Create Ticket</button>
        </form>
      )}
      
      <h2>Tickets</h2>
      <div className="ticket-cards">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="ticket-card">
            <h3>{ticket.clientName}</h3>
            <p><span>Serial Number:</span> {ticket.serialNumber}</p>
            <p><span>Client Address:</span> {ticket.clientAddress}</p>
            <p><span>Client Contact:</span> {ticket.clientContact}</p>
            <p className="amount"><span>Amount:</span> ${ticket.amount}</p>
            <p className="status">Assigned</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
