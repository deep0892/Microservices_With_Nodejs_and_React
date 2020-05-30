import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  console.log('This is signin route');
});

export { router as signinRouter };
