import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  try {
    if (!process.env.JWT_KEY) {
      throw new Error('JWT_KEY must be defined');
    }
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('connected to mongodb');
  } catch (error) {
    console.log(error);
  }
  app.listen(3000, () => {
    console.log(`Server running on port 3000!!`);
  });
};

start();
