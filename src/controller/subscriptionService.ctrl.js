const express = require('express');
const svc = require('../service/subscriptionService.svc');
const PaginationUtil = require('../utils/PaginationUtil');
const wrapAsync = require('../utils/exceptionUtils').wrapAsync;
const router = express.Router();
const { body, header, query, validationResult } = require('express-validator');

router.get(
    '/',
    [
        query('limit').optional().isNumeric().withMessage('숫자를 입력해주세요'),
        query('page').optional().isNumeric().withMessage('숫자를 입력해주세요'),
    ],
    wrapAsync(async (req, res, next) => {
        // 값 검증
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        var subService = await svc.getSubscriptionService(
            {},
            PaginationUtil.buildOffsetLimit(req) // pagination
        );

        res.json(subService);
    })
);

router.post(
    '/',
    [
        query('nameEng').isEmpty().withMessage('nameEng는 필수값입니다.'),
        query('nameKr').isEmpty().withMessage('nameKr는 필수값입니다.'),
        query('logoPath').isEmpty().withMessage('logoPath는 필수값입니다.'),
        query('description').isEmpty().withMessage('nameEng는 필수값입니다.'),
        query('categoryId').isEmpty().withMessage('categoryId는 필수값입니다.'),
    ],
    wrapAsync(async (req, res, next) => {
        // 값 검증
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        var subService = await svc.createSubscriptionService({
            nameEng: req.body.nameEng,
            nameKr: req.body.nameKr,
            logoPath: req.body.logoPath,
            description: req.body.description,
            categoryId: req.body.categoryId,
        });

        res.json(subService);
    })
);

module.exports = router;
