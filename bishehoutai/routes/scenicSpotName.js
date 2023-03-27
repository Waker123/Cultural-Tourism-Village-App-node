var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {
        code: 0,
        data: [1, 2, 3, "指南村"],
        isSuccess: true,
        msg: "请求成功"
    }
    res.json(data);
});

module.exports = router;
