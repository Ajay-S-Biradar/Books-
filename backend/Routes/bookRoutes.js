const express = require('express');
const { registerBook, getAllBooks, retrieveBook, removeBook, updateBook } = require('../controllers/bookControllers');

const router = express.Router();

router.route('/').post(registerBook).get(getAllBooks);
router.route('/:id').get(retrieveBook).put(updateBook);
router.route('/:id').delete(removeBook);

module.exports = router