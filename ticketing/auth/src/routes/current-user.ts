import expres, { Request, Response } from 'express';

import { currentUser } from '../middlewares/current-user';

const router = expres.Router();

router.get(
  '/api/users/currentuser',
  currentUser,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);

export { router as currentUserRouter };
