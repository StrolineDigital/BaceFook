//This is the entry point for the application which is initiated by running the command "npm start" in the terminal.
//Requires the express package
const express = require('express');
//Requires the database connection
const db = require('./config/connections');
//Requires the routes
const routes = require('./routes');
//Creates the express app
const app = express();
//Sets the port
const PORT = process.env.PORT || 3001;
//Sets up the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
//Connects to the database
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

