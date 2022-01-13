const Jimp = require('jimp')
const User = require('../models/User')
const path = require("path")
const Files = require('../models/files')

class ActivateController {
    async setAndGetFile(req, res, next) {
        //validation
        const { email, files, OriginalFileName } = req.body

        if (!email || !files || !OriginalFileName) {
            return res.json("All feilds are required!")
        }
        
        //convert base64 file into png file
        const buffer = Buffer.from(files.replace(/^data:image\/(png|jpg|jpeg);base64,/, ""), 'base64');
        const filePath = `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`
        //jimp image processing library
        try {
            const jimpResp = await Jimp.read(buffer)
            jimpResp.resize(150, Jimp.AUTO).write(path.resolve(__dirname, `../uploads/${filePath}`));
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: 'could not process the image' })
        }

        //activate user 
        let user;
        let userFiles;
        const fileName = `/uploads/${filePath}`
        try {
            user = await User.findOne({ email })
            if (!user) {
                return res.status(500).json({ msg: 'user not found' })
            }
            userFiles = await Files.create({
                email: user.email,
                name: user.name,
                files: fileName,
                OriginalFileName
            })
            // res.json({ user: new UserDto(user), auth: true });
            res.json({ user, userFiles });

        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: 'database error' })
        }
    }
}

module.exports = new ActivateController()