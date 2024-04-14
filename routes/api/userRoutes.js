const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUser,
    createFriend,
    deleteFriend
} = require('../../controllers/user-controller');

router.route('/').get(getAllUsers).post(createUser);

router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(createFriend).delete(deleteFriend); 

module.exports = router;
