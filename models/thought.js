//Requires the Mongoose package
const {Schema, model} = require('mongoose');
//Requires the reaction schema
const reactionSchema = require('./reaction');
//Defines the thought schema
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
       username: {
        type: String,
        required: true
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);
//Defines the virtual reaction count
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

//Creates the Thought model using the thought schema
const Thought = model('Thought', thoughtSchema);    
//Exports the Thought model
module.exports = Thought;
