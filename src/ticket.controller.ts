import type { Request, Response } from "express";
import { db } from "./db/index.js";
import { tickets } from "./db/schema.js";

export const getTickets = async (_req: Request, res: Response) => {
  const data = await db.select().from(tickets);
  return res.json(data);
}