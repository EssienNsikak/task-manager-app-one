import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import taskRoutes from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();

app.use('/api/v1', taskRoutes);
app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);


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