import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  console.log('this is sign out router');
});

export { router as signoutRouter };
