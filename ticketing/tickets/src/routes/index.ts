import express, { Request, Response } from 'express';
import { NotFoundError } from '@dipstickets/common';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets', async (req: Request, res: Response) => {
  const tickets = await Ticket.find({});
  return res.send(tickets);
});

export { router as indexTicketRouter };
