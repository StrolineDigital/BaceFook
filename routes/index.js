//Require express and the api routes
const router = require('express').Router();
const apiRoutes = require('./api'); 
//Set up the routes for the api
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).send('<h1> 404 Error!</h1>');
});
//Export the router
module.exports = router;