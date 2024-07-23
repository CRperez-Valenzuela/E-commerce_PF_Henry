// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
