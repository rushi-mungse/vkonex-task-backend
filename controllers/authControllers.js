const User = require('../models/User')

class AuthController {
    //register controller
    async register(req, res, next) {
        //get the data from user
        const { email, password, name } = req.body;
        //check data is all ok
        if (!email || !password || !name) {
            return res.json({ msg: "All fields are required!", auth: false })
        }
        //checking user in database or not already
        const exist = await User.findOne({ email });
        if (exist) {
            return res.json({ msg: "Eamil already registed", auth: false })
        }

        let user;
        try {
            //save user data in database
            user = await User.create({
                email,
                name,
                password
            })

        } catch (error) {
            console.log(error);
            return res.json({ msg: "Internal server Error", auth: false });
        }

        return res.json({ user, auth: true })
    }

    async logIn(req, res, next) {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ msg: "All fields are required.", auth: false })
        }

        let user;
        try {
            user = await User.findOne({ email, password })

            if (!user) {
                return res.json({ msg: "User not found", auth: false })
            }

            return res.json({ user, auth: true })
        } catch (error) {
            console.log(error);
            return res.json({ msg: "Internal server Error", auth: false })
        }
    }
}
module.exports = new AuthController