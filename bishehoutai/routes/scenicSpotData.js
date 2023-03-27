var express = require('express');
var router = express.Router();
const sourceData = {
    '指南村': {
        introduce: [
            `指南村位于临安太湖源头的南苕溪之滨，海拔近600米，是一座有着数千年历史的古村。由于村子左右两侧分布着470余亩梯田，为摄影爱好者们的天堂，并被户外圈称作华东地区最美古村落之一。`,
            `地理位置: 
            指南村位于临安东天目山麓，太湖源头的南苕溪之滨，海拔550米，距杭州市80公里，柏油马路已通至村口，交通便利。山的左右两侧有四百七十多亩梯田，蔚蔚壮观。
            村的周围古树参天，至今还保留着三百四十多株树种为枫香、天目铁木和银杏为主的珍稀古树，都是国家保护的名木。
            `,
            ` 历史遗韵:
            莫家古庙
            除了年代久远的古墓，莫家古庙也有1200多年历史，而且，700多年前的古庙遗址碑石至今还在。
            比较少见的古姓郤(qie)、郄(xi)也流传至今。时间近一点的，村里还保留着五六幢明、清时期的古民居。粉墙黛瓦的古民居，高高的马头墙、镂空的木窗棂，以及精心雕刻过的梁柱，无不显示出徽派建筑风格的古风古韵。 
            天池
            指南村“天池”，位于村中心的古塘。历史上其实曾有四个古塘，后来合并成一个，占地15亩，约10000平方米，有些像宏村的方塘。“天池”西面是一片枫树林和散落的民居，全村200多户人家主要分布在它的西南面。
            `
        ]
    },
    '1': '222',
    '2': '333',
    "3": '444'
}

router.post('/', function (req, res) {


    console.log(req.body);
    // 根据前端返回的当前景点返回相应的数据
    if (req.body.currentScenicSpot === "指南村") {
        res.send({
            state: 'success',
            data: sourceData.指南村
        });
    } else if (req.body.currentScenicSpot == '1') {
        res.send({
            state: 'success',
            data: sourceData['1']
        });
    } else if (req.body.currentScenicSpot == '2') {
        res.send({
            state: 'success',
            data: sourceData['2']
        });
    } else if (req.body.currentScenicSpot == '3') {
        res.send({
            state: 'success',
            data: sourceData['3']
        });
    }

});

module.exports = router;
