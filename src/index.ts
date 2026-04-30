import express from "express";
import { getTickets } from "./ticket.controller";

const app = express();

app.use(express.json());

app.get("/api/tickets", getTickets);

export default app;