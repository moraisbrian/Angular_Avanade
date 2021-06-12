const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});

module.exports = mongoose;