const { Ticket } = require("../models");

const createTicket = async (req, res) => {
  const { serialNumber, clientName, clientAddress, clientContact, amount, assignedTo } = req.body;
  const createdBy = req.user.id;
  try {
    const ticket = await Ticket.create({
      serialNumber,
      clientName,
      clientAddress,
      clientContact,
      amount,
      createdBy,
      assignedTo,
    });
    res.status(201).json(ticket);
  } catch (err) {
    res.status(500).json({ message: "Error creating ticket", error: err.message });
  }
};

const getTickets = async (req, res) => {
  const { role, id } = req.user;

  try {
    let tickets;
    if (role === "Financial Planner") {
      tickets = await Ticket.findAll({ where: { createdBy: id } });
    } else if (role === "Mortgage Broker") {
      tickets = await Ticket.findAll({ where: { assignedTo: id } });
    }
    res.status(200).json(tickets);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving tickets", error: err.message });
  }
};

module.exports = { createTicket, getTickets };
