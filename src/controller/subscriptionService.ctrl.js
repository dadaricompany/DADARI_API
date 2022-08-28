const express = require('express');
const svc = require('../service/subscriptionService.svc');
const PaginationUtil = require('../utils/paginationUtil');
const wrapAsync = require('../utils/exceptionUtils').wrapAsync;
const logger = require('../../config/winston');
const CONSTS = require('../common/consts');

const router = express.Router();
const { body, header, query, validationResult } = require('express-validator');
/**
 * @swagger
 * tags:
 *   name: 구독서비스
 *   description: 구독서비스 API
 */

/**
 * @swagger
 * paths:
 *  /subscriptionService/main:
 *   get:
 *    tags:
 *    - Main API
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
 *         main:
 *          type: array
 *          items:
 *           type: object
 *           properties:
 *            id:
 *             type: integer
 *            name:
 *             type: string
 *            description:
 *             type: string
 *            logoPath:
 *             type: string
 *            subscriptionServices:
 *             type: array
 *             items:
 *              type: object
 *              properties:
 *               id:
 *                type: integer
 *               nameEng:
 *                type: string
 *               nameKr:
 *                type: string
 *               logoPath:
 *                type: string
 *               description:
 *                type: string
 *     400:
 *      description: 메인화면 API 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *        stack:
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
            throw { message: CONSTS.MESSAGE.INVALID_VALUE, stack: JSON.stringify(errors.array()) };
        }

        var subService = await svc.getMainSubscriptionService(
            {},
            PaginationUtil.buildOffsetLimit(req) // pagination
        );

        var result = {
            main: subService,
        };

        //var error = undefined;
        //logger.debug(error.print());
        logger.debug(JSON.stringify(result));
        res.json(result);
    })
);

/**
 * @swagger
 * paths:
 *  /subscriptionService/list:
 *   get:
 *    tags:
 *    - List API
 *    description: 카테고리별 구독서비스 조회
 *    parameters:
 *    - in: query
 *      name: categoryId
 *      required: true
 *      schema:
 *       type: integer
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
 *      description: 구독서비스 리스트 API 조회 성공
 *      schema:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            id:
 *             type: integer
 *            nameEng:
 *             type: string
 *            nameKr:
 *             type: string
 *            logoPath:
 *             type: string
 *            description:
 *             type: string
 *     400:
 *      description: 구독서비스 리스트 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *        stack:
 *         type: string
 *
 */
router.get(
    '/list',
    [
        query('categoryId').notEmpty().withMessage('categoryId는 필수값입니다.'),
        query('limit').optional().isNumeric().withMessage('숫자를 입력해주세요'),
        query('page').optional().isNumeric().withMessage('숫자를 입력해주세요'),
    ],
    wrapAsync(async (req, res, next) => {
        // 값 검증
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw { message: '입력값을 확인해주세요.', stack: JSON.stringify(errors.array()) };
        }

        var subService = await svc.getSubscriptionServiceList(
            {
                categoryId: req.query.categoryId,
            },
            PaginationUtil.buildOffsetLimit(req) // pagination
        );

        var result = subService;

        logger.debug(JSON.stringify(result));
        res.json(result);
    })
);

/**
 * @swagger
 * paths:
 *  /subscriptionService/{id}:
 *   get:
 *    tags:
 *    - Detail API
 *    description: 구독서비스 조회
 *    parameters:
 *    - in: path
 *      name: id
 *      required: true
 *      schema:
 *       type: integer
 *
 *    responses:
 *     200:
 *      description: 구독서비스 조회 성공
 *      schema:
 *       properties:
 *        id:
 *         type: integer
 *        nameEng:
 *         type: string
 *        nameKr:
 *         type: string
 *        logoPath:
 *         type: string
 *        description:
 *         type: string
 *        compareValues:
 *         type: array
 *         items:
 *          type: object
 *          properties:
 *           id:
 *            type: integer
 *           nameEng:
 *            type: string
 *           nameKr:
 *            type: string
 *           logoPath:
 *            type: string
 *           description:
 *            type: string
 *     400:
 *      description: 구독서비스 조회 실패
 *      schema:
 *       properties:
 *        message:
 *         type: string
 *        stack:
 *         type: string
 *
 */
router.get(
    '/:id',
    wrapAsync(async (req, res, next) => {
        // 값 검증
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw { message: CONSTS.MESSAGE.INVALID_VALUE, stack: JSON.stringify(errors.array()) };
        }

        var subscriptionServiceId = req.params.id;
        if (!subscriptionServiceId) {
            throw { message: 'id를 확인해주세요.', stack: null };
        }

        var subService = await svc.getSubscriptionService({
            id: subscriptionServiceId,
        });

        logger.debug(JSON.stringify(subService));
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
            throw { message: '입력값을 확인해주세요.', stack: JSON.stringify(errors.array()) };
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
