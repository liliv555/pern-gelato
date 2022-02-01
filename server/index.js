require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');

const port = 5000;

// Middleware

app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
