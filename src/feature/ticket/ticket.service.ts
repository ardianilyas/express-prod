import { eq } from "drizzle-orm";
import { db } from "../../db";
import { tickets } from "../../db/schema";
import type { CreateTicketDto, UpdateTicketDto } from "./ticket.dto";

export class TicketService {
  async getTickets() {
    const data = await db.select().from(tickets);
    return data;
  }

  async getTicketById(id: string) {
    const ticket = await db.select().from(tickets).where(eq(tickets.id, id));
    if (ticket.length === 0) {
      throw new Error("Ticket not found");
    }
    return ticket;
  }

  async createTicket(data: CreateTicketDto) {
    return await db.insert(tickets).values(data).returning();
  }

  async updateTicket(id: string, data: UpdateTicketDto) {
    const ticket = await db
      .update(tickets)
      .set(data)
      .where(eq(tickets.id, id))
      .returning();
    return ticket;
  }

  async updateTicketStatus(id: string, status: string) {
    const ticket = await db
      .update(tickets)
      .set({ status })
      .where(eq(tickets.id, id))
      .returning();
    return ticket;
  }

  async deleteTicket(id: string) {
    const ticket = await db.delete(tickets).where(eq(tickets.id, id)).returning();
    if (ticket.length === 0) {
      throw new Error("Ticket not found");
    }
    return;
  }
}