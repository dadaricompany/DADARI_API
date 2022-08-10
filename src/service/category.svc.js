const Category = require('../models/category');
const { validationResult } = require('express-validator');

const getCategory = async (req, res, next) => {

    // 값 검증
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // 페이징 처리
    let page = req.query.page;
    let limit = req.query.limit * 1;
    let offset = 0;
    
    if (page > 1) {
      offset = limit * (page - 1);
    }
    
    try {
        const catogory = await Category.findAll({
            offset,
            limit,
        });
        res.json(catogory);
    } catch(err){ 
        console.error(err);
        next(err);
    }
}

module.exports = {getCategory};