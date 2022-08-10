const express = require('express');
const svc = require('../service/category.svc');
const router = express.Router();
const { body, header, query } = require('express-validator');

router.get('/', [
    query('limit').optional().isNumeric().withMessage('숫자를 입력해주세요'),
    query('page').optional().isNumeric().withMessage('숫자를 입력해주세요'),
], svc.getCategory)

module.exports = router;