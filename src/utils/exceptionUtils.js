const logger = require('../../config/winston');

// global exception catch
wrapAsync = (fn) => {
    return function (req, res, next) {
        // 모든 오류를 .catch() 처리하고 next()로 전달하기
        fn(req, res, next).catch(next);
    };
};

// ErrorResponse 생성
buildErrorResponse = (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.json({
        message: err.message,
        stack: err.stack,
    });
    //res.render('error');

    logger.error(err.message);
    logger.error(err.stack);
};

module.exports = { wrapAsync, buildErrorResponse };
