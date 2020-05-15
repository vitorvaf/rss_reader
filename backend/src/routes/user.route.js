const express = require('express');
const router = require('express').Router();
const userController = require('../controllers/UserController');



router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUser);

module.exports = router;