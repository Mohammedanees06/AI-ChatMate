const express = require('express');
const router = express.Router();
const aiController = require('../controllers/ai.controller');

router.post('/getAiChatResponse', aiController.getAiChatResponse);

module.exports = router;