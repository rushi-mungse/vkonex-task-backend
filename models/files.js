const mongoose = require('mongoose')
const { Schema } = mongoose;

const FilesSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    files: {
        type: String,
        required: true
    },
    OriginalFileName: {
        type: String,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model('fiels', FilesSchema)