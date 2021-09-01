import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import taskRoutes from './routes/taskRoutes.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.use('/api/v1/tasks', taskRoutes);


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  return next();
});

const MONGO_URL = process.env.MONGO_URL
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
  })
  .then(() => console.log('DB Connected Successfully'))
  .catch((err) => {
    console.error(err.message);
  });

app.use(express.json());

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Backend server is running on PORT ${PORT}`);
});