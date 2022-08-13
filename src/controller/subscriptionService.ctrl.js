const express = require('express');
const svc = require('../service/subscriptionService.svc');
const PaginationUtil = require('../utils/PaginationUtil');
const wrapAsync = require('../utils/exceptionUtils').wrapAsync;
const router = express.Router();
const { body, header, query, validationResult } = require('express-validator');
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
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
 *   post:
 *    tags:
 *    - subscriptionService
 *    description: 메인 구독서비스 조회
 *    parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      schema:
 *       properties:
 *        id:
 *         type: string
 *        pw:
 *         type: string
 *
 *    responses:
 *     200:
 *      description: 닉네임 조회 성공
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *     401:
 *      description: 닉네임 조회 실패
 *      schema:
 *       properties:
 *        message:
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
