const router = require('express').Router();
const AuthController = require('../controllers/authControllers')
const FileController=require('../controllers/filesControllers')

router.post('/api/register', AuthController.register);
router.post('/api/login', AuthController.logIn);
router.post('/api/getSetFile',FileController.setAndGetFile );

module.exports = router;