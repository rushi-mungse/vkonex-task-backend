const mongoose = require('mongoose')
const { Schema } = mongoose;

const UserSchema = new Schema({

    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema)