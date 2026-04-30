import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const tickets = pgTable("tickets", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: text("status").default("OPEN").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
})