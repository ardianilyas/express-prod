import type { NextFunction, Request, Response } from "express";
import type { TicketService } from "./ticket.service";

export class TicketController {
  constructor(private ticketService: TicketService) {}

  getTickets = async (_req: Request, res: Response) => {
    const data = await this.ticketService.getTickets();
    return res.status(200).json(data);
  }

  getTicketById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.ticketService.getTicketById(id as string);
      return res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  }

  createTicket = async (req: Request, res: Response) => {
    const data = await this.ticketService.createTicket(req.body);
    return res.status(201).json(data);
  }

  updateTicket = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.ticketService.updateTicket(id as string, req.body);
    return res.status(200).json(data);
  }

  updateTicketStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await this.ticketService.updateTicketStatus(id as string, req.body.status);
    return res.status(200).json(data);
  }

  deleteTicket = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.ticketService.deleteTicket(id as string);
    return res.status(204);
  }
}