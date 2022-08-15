const express = require('express');
const svc = require('../service/subscriptionService.svc');
const PaginationUtil = require('../utils/paginationUtil');
const wrapAsync = require('../utils/exceptionUtils').wrapAsync;
const router = express.Router();
const { body, header, query, validationResult } = require('express-validator');
/**
 * @swagger
 * tags:
 *   name: Main
 *   description: Main화면 조회 API
 */

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

/**
 * @swagger
 * paths:
 *  /subscriptionService/main:
 *   get:
 *    tags:
 *    - Category
 *    description: 메인화면 조회 (카테고리)
 *    parameters:
 *    - in: query
 *      name: page
 *      required: false
 *      schema:
 *       type: integer
 *    - in: query
 *      name: limit
 *      required: false
 *      schema:
 *       type: integer
 *
 *    responses:
 *     200:
 *      description: 메인화면 API 조회 성공
 *      schema:
 *       properties:
 *        main:
 *         type: string
 *     400:
 *      description: 메인화면 API 조회 실패
 *      schema:
 *       properties:
 *        error:
 *         type: string
 *
 */
router.get(
    '/main',
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

        var subService = await svc.getMainSubscriptionService(
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
