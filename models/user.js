//requires the mongoose package
const {Schema, model} = require('mongoose');
//Defines the user schema
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            // This is a custom email validation function
            validator: function (v) {
              return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
                v
              );
    },
        },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    ],
},
});

//This creates the virtual friend count using the user schema
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//Creates the User model using the user schema
const User = model('User', userSchema); 
//Exports the User model
module.exports = User;