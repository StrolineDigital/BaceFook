//Require express
const router = require('express').Router();
//Require the functions from the user-controller.js file
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//Set up the routes for the users
router.route('/').get(getAllUsers).post(createUser);
//Set up the routes for the users by ID
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUser);
//Set up the routes for the friends
router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend); 
//Export the router
module.exports = router;
