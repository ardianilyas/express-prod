import { Router } from "express";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";

const router = Router();

const ticketService = new TicketService();
const ticketController = new TicketController(ticketService);

router.get("/", ticketController.getTickets);
router.get("/:id", ticketController.getTicketById);
router.post("/", ticketController.createTicket);
router.patch("/:id", ticketController.updateTicket);
router.patch("/:id/status", ticketController.updateTicketStatus);
router.delete("/:id", ticketController.deleteTicket);

export default router;