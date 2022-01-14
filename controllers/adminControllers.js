const Files = require('../models/files')

class AdminController {
    async admin(req, res, next) {
        try {
            const userWithFile = await Files.find();
            return res.json({userWithFile});
        } catch (error) {
            return res.json({ msg: "Internal server Error" });
        }
    }
}
module.exports = new AdminController