// Purpose: Establish connection to MongoDB using Mongoose
const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/bacefook', { useNewUrlParser: true, useUnifiedTopology: true });

// Export connection 
module.exports = mongoose.connection;
