// imports the User and Thought models from the models directory and exports them as an object 
//so we can easily access them in other parts of our application. 
const User = require('./user');
const Thought = require('./thought');

module.exports = { User, Thought };