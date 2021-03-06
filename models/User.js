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
    role:{
        type:String,
        default:"user",
        required:false
    }

}, { timestamps: true });

module.exports = mongoose.model('user', UserSchema)