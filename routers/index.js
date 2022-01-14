const router = require('express').Router();
const AdminControllers = require('../controllers/adminControllers');
const AuthController = require('../controllers/authControllers')
const FileController=require('../controllers/filesControllers')

router.post('/api/register', AuthController.register);
router.post('/api/login', AuthController.logIn);
router.post('/api/getSetFile',FileController.setAndGetFile );
router.get('/api/allUsers',AdminControllers.admin );

module.exports = router;