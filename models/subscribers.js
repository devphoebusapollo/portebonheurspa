const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Subscribers', subSchema);