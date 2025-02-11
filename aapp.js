const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    console.log("API called: GET /test");
    res.send("API is working and message logged!");
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
