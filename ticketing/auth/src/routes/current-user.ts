import expres from 'express';

const router = expres.Router();

router.get('/api/users/currentuser', (req, res) => {
  console.log('Hi There!');
  res.send('Hi There!');
});

export { router as currentUserRouter };
