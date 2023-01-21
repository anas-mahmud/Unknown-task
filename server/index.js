const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Leadzen task server in running')
})

app.listen(port, () => {
    console.log(`Leadzen task server in running on port ${port}`);
})