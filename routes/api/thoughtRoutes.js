//Require the router from express
const router = require('express').Router();
//Require the functions from the thought-controller.js file
const {getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThoughtById, 
    deleteThought, 
    createReaction, 
    deleteReaction} = require('../../controllers/thought-controller');
    const {create}=require('../../models/user');

    //Set up the routes for the thoughts
    router.route('/').get(getAllThoughts).post(createThought);

    //Set up the routes for the thoughts by ID
    router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought);
//Set up the routes for the reactions
    router.route('/:thoughtId/reactions').post(createReaction);
//Set up the routes for the reactions by ID
    router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
//Export the router
    module.exports = router;
