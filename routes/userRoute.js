import express from 'express';
import * as userController from '../controllers/userController.js';

const router=express.Router();

router.route('/register').post(userController.createUser);
router.route('/lists').get(userController.getUsers);
router.route('/:id').get(userController.getUser);
router.route('/login').post(userController.loginUser);

export default router;