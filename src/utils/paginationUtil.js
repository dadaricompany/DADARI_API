module.exports = class PaginationUtil {
    /**
     * pangination을 위한 offset, limit 반환
     * @param {*} req
     * @returns
     */
    static buildOffsetLimit(req) {
        // 페이징 처리
        let page = req.query.page;
        let limit = req.query.limit;
        let offset;

        if (page) {
            page = Number(page);
            limit = Number(limit);
            offset = limit * (page - 1);
        }
        return {
            offset,
            limit,
        };
    }
};
