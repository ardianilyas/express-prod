import express, { type Request, type Response } from "express";
import ticketRouter from "./feature/ticket/ticket.route";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "OK" });
});

app.use("/api/tickets", ticketRouter);

export default app;