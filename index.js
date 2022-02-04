if (process.env.NODE_ENV !== 'production') {
    import 'dotenv/config';
}
import dbInit from './db/init.js';
import express from 'express';
import router from './routes.js';
import cors from 'cors';
import * as path from 'path'

const app = express();
const PORT = process.env.PORT || 5000;

dbInit();

// Middleware

app.use(cors());
app.use(express.json());

const __dirname = path.resolve(path.dirname('')); 

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));
};

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

app.use(router);
