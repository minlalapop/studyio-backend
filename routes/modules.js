const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

router.get('/', moduleController.getModules);
router.post('/', moduleController.createModule);
router.put('/:id', moduleController.updateModule);
router.delete('/:id', moduleController.deleteModule);

module.exports = router;