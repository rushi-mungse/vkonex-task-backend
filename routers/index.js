const router = require('express').Router();
const AuthController = require('../controllers/authControllers')

router.post('/api/register', AuthController.register);
router.post('/api/login', AuthController.logIn);

module.exports = router;