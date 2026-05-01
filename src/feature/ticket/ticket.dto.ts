export type CreateTicketDto = {
  title: string;
  description: string;
}

export type UpdateTicketDto = {
  title: string;
  description: string;
}

export type ChangeTicketStatusDto = {
  status: string;
}