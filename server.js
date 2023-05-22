const express = require("express");
const cookieParser = require("cookie-parser");
let cookieSession = require("cookie-session");
const server = express();
const port = 8003;

server.listen(port, () => console.log(`Server is running on ${port}`));
server.use(express.json());
server.use(cookieParser());

// Create an Express application that sets a cookie when routed to /login with their name.
// If a cookie is present with a name key, then it says "welcome {name}! when the user routes to /hello
server.use(
  cookieSession({
    name: "user_session",
    secret: 'somesuperimpressivestringofcharactersnoonewouldpossiblyguessmaybe',
  })
);

server.get("/login", (req, res) => {
  res.cookie("name", "Tobi");
  res.send();
});

server.get('/hello', (req, res) => {
    res.send(`welcome ${req.cookies.name}!`);
})