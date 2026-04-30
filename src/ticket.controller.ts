import type { Request, Response } from "express";
import { db } from "./db";
import { tickets } from "./db/schema";

export const getTickets = async (_req: Request, res: Response) => {
  const data = await db.select().from(tickets);
  return res.json(data);
}