const express = require('express');
const router = express.Router();
const item = require('../models/user/controller');

/* GET items listing. */
router.get('/', item.getAll);

/* POST items listing. */
router.post('/', item.create);

/* PATCH items listing. */
router.patch('/:id', item.update);

/* DELETE items listing. */
router.delete('/:id', item.delete);

module.exports = router;
