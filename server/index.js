import 'dotenv/config';
import dbInit from './db/init.js';
import express from 'express';
const app = express();
import cors from 'cors';

const port = 5000;

dbInit();

// Middleware

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
