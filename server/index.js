const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 9000;

app.get('/', (_req, res) => {
    res.send('Hello world');
});




// Start the server
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});