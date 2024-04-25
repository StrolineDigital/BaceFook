//requires the mongoose package
const {Schema, model,Types} = require('mongoose');

//This  variable defines the reaction schema.
const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280
    },
    username: {
        type: String,
        required: true
    }
    
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

//This exports the reaction model.
module.exports = reactionSchema;