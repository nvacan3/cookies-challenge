const express = require('express');
const cookieParser = require('cookie-parser')
const server = express();
const port = 8003

server.use(express.json());
server.use(cookieParser());

server.get('/', (req, res) => {
    res.status(200).send('Welcome')
})

server.listen(port, () => console.log(`Server is running on ${port}`))