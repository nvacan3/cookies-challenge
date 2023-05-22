const express = require('express');
const cookieParser = require('cookie-parser')
const server = express();
const port = 8003

server.listen(port, () => console.log(`Server is running on ${port}`))
server.use(express.json());
server.use(cookieParser());
server.use(cookieSession ({
    name: 'user_session'
}))

server.get('/login', (req, res) => {
    if (loginSuccess(req.body.username, req.body.password)) {
        req.session.username = req.body.username
    };
    
    var opts = {
        httpOnly: true, 
        sameSite: 'strict'
    };
});
res.cookie('some_name', 'some_value', opts)


// Create an Express application that sets a cookie when routed to /login with their name. 
// If a cookie is present with a name key, then it says "welcome {name}! when the user routes to /hello

server.post('/login', (req, res, next) => {
    if (loginSuccess(req.body.username, req.body.password)) {
        req.session.username = req.body.username;
    }
})

