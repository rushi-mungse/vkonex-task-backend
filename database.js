
const mongoose = require('mongoose');

function DbConnect() {
    const DB_URL ="mongodb://localhost:27017/vkonex?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false" 

    mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('DB Connected..')
    });

}
module.exports = DbConnect;