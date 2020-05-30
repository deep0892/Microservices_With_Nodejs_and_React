import express, { json } from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi There!!');
});

app.listen(3000, () => {
  console.log(`Server running on port 3000!!`);
});
