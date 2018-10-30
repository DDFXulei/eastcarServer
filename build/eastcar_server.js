"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
function sortArr(arr, sortBy, sortMode) {
    var len = arr.length;
    //排序方法为冒泡排序
    for (var i = 1; i < len; ++i) {
        for (var j = 1; j < len - i; ++j) {
            //为true时，降序排序
            if (sortMode == 'true') {
                //根据对象数组中对象的sortBy属性排序
                if (arr[j][sortBy] > arr[j + 1][sortBy]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
            else {
                //为false时，升序排序
                if (arr[j][sortBy] < arr[j + 1][sortBy]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
    return arr;
}
var UsedCar = (function () {
    function UsedCar(indexImg, productCode, productName, brandCode, brandName, seriesCode, seriesName, modelName, directivePrice, lastDownPay, oldDownPay, enterDate, exeuntDate, monthlyPayment, emissionStandard, gearBox, exhaust, vehicleType, fuelSystem, approvePassenger, vehicleLocation, dashMilieage, firstRegister, purchaseTax, directivePriceTaxed, vehicleColor) {
        this.indexImg = indexImg;
        this.productCode = productCode;
        this.productName = productName;
        this.brandCode = brandCode;
        this.brandName = brandName;
        this.seriesCode = seriesCode;
        this.seriesName = seriesName;
        this.modelName = modelName;
        this.directivePrice = directivePrice;
        this.lastDownPay = lastDownPay;
        this.oldDownPay = oldDownPay;
        this.enterDate = enterDate;
        this.exeuntDate = exeuntDate;
        this.monthlyPayment = monthlyPayment;
        this.emissionStandard = emissionStandard;
        this.gearBox = gearBox;
        this.exhaust = exhaust;
        this.vehicleType = vehicleType;
        this.fuelSystem = fuelSystem;
        this.approvePassenger = approvePassenger;
        this.vehicleLocation = vehicleLocation;
        this.dashMilieage = dashMilieage;
        this.firstRegister = firstRegister;
        this.purchaseTax = purchaseTax;
        this.directivePriceTaxed = directivePriceTaxed;
        this.vehicleColor = vehicleColor;
    }
    return UsedCar;
}());
var TailMoney = (function () {
    function TailMoney(productCode, moneyTotal, monthQty, perMonthPay) {
        this.productCode = productCode;
        this.moneyTotal = moneyTotal;
        this.monthQty = monthQty;
        this.perMonthPay = perMonthPay;
    }
    return TailMoney;
}());
var User = (function () {
    function User(id, firstName, lastName, email) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    return User;
}());
var usedCarList = [
    new UsedCar('../../../assets/img/551636c241f471bbf41ca3d2383f223a.jpg', 'UC201810180001', '2014款 奥迪A6L 30 FSI 舒适型', 'Audi', '奥迪', 'AudiA6L', 'A6L', '30 FSI 舒适型', 45.88, 4.68, 3.74, 1539784534579, null, 5998, '国四', 'CVT-无级', '2.5L', '中大型车', '汽油', '5人', '无锡', 10.65, 1539784000000, 4.01, 50.88, '黑色'),
    new UsedCar('../../../assets/img/59f66ab2dfa1fb58ccc6d93f4f5588b2.jpg', 'UC201810180002', '2016款 奥迪A4L 35 FSI 进取型', 'Audi', '奥迪', 'AudiA4L', 'A4L', '35 FSI 进取型', 30.88, 2.68, 2.74, 1539984536579, null, 4998, '国五', '7速DCT', '2.0L涡轮', '中型车', '汽油', '5人', '无锡', 5.65, 1339784000000, 3.01, 30.88, '白色'),
    new UsedCar('../../../assets/img/dff4bc652baa0b1bdbd10d38f7c3d889.jpg', 'UC201810180003', '2011款 奥迪A3 30 FSI 运动版', 'Audi', '奥迪', 'AudiA3', 'A3', '30 FSI 运动版', 25.88, 1.98, 3.74, 1549784537579, null, 1998, '国四', 'CVT-无级', '2.5L', '紧凑型车', '汽油', '5人', '无锡', 3.65, 1529784000000, 2.01, 23.88, '白色'),
    new UsedCar('../../../assets/img/a1f32ec7828f408011dfa4183ddd97ae.jpg', 'UC201810180004', '2014款 奥迪A5 40 FSI 豪华型', 'Audi', '奥迪', 'AudiA5', 'A5', '40 FSI 豪华型', 45.88, 3.68, 4.74, 1519784537579, null, 3998, '国三', '8速DCT', '3.5L', '中型车', '汽油', '5人', '无锡', 15.65, 1239784000000, 5.01, 65.88, '白色'),
    new UsedCar('../../../assets/img/3e4887c1756308774b2cfb25819ef6d9.jpg', 'UC201810180005', '2014款 宝马5系 540Li 豪华型', 'BMW', '宝马', 'BMW5', '5系', '540Li 豪华型', 42.88, 4.68, 4.74, 1519784834579, null, 3998, '国四', '8速AT', '3.0L', '中型车', '汽油', '5人', '无锡', 15.65, 1239784000000, 5.01, 45.88, '黑色'),
    new UsedCar('../../../assets/img/ff35bbbf648865a7cb017a0a58753555.jpg', 'UC201810180006', '2013款 宝马3系 320LiM运动套装', 'BMW', '宝马', 'BMW3', '3系', '320Li M运动套装', 32.88, 6.00, 4.74, 1519787534579, null, 5998, '国四', '8速AT', '2.0L', '中型车', '汽油', '5人', '无锡', 3.65, 1519784000000, 5.01, 35.88, '蓝色'),
    new UsedCar('../../../assets/img/551636c241f471bbf41ca3d2383f223a.jpg', 'UC201810180001', '2014款 奥迪A6L 30 FSI 舒适型', 'Audi', '奥迪', 'AudiA6L', 'A6L', '30 FSI 舒适型', 45.88, 4.68, 3.74, 1539784734579, null, 5998, '国四', 'CVT-无级', '2.5L', '中大型车', '汽油', '5人', '无锡', 8.65, 1539784000000, 4.01, 50.88, '黑色'),
    new UsedCar('../../../assets/img/59f66ab2dfa1fb58ccc6d93f4f5588b2.jpg', 'UC201810180002', '2016款 奥迪A4L 35 FSI 进取型', 'Audi', '奥迪', 'AudiA4L', 'A4L', '35 FSI 进取型', 30.88, 2.68, 2.74, 1539984734579, null, 4998, '国五', '7速DCT', '2.0L涡轮', '中型车', '汽油', '5人', '无锡', 3.65, 1339784000000, 3.01, 30.88, '白色'),
    new UsedCar('../../../assets/img/dff4bc652baa0b1bdbd10d38f7c3d889.jpg', 'UC201810180003', '2011款 奥迪A3 30 FSI 运动版', 'Audi', '奥迪', 'AudiA3', 'A3', '30 FSI 运动版', 25.88, 1.98, 3.74, 1549784534579, null, 1998, '国四', 'CVT-无级', '2.5L', '紧凑型车', '汽油', '5人', '无锡', 2.65, 1529784000000, 2.01, 23.88, '白色'),
    new UsedCar('../../../assets/img/a1f32ec7828f408011dfa4183ddd97ae.jpg', 'UC201810180004', '2014款 奥迪A5 40 FSI 豪华型', 'Audi', '奥迪', 'AudiA5', 'A5', '40 FSI 豪华型', 45.88, 5.68, 4.74, 1519984534579, null, 3998, '国三', '8速DCT', '3.5L', '中型车', '汽油', '5人', '无锡', 12.65, 1239784000000, 5.01, 65.88, '白色'),
    new UsedCar('../../../assets/img/3e4887c1756308774b2cfb25819ef6d9.jpg', 'UC201810180005', '2014款 宝马5系 540Li 豪华型', 'BMW', '宝马', 'BMW5', '5系', '540Li 豪华型', 42.88, 7.68, 4.74, 1529784534579, null, 3998, '国三', '8速AT', '3.0L', '中型车', '汽油', '5人', '无锡', 5.65, 1239784000000, 5.01, 45.88, '黑色'),
    new UsedCar('../../../assets/img/ff35bbbf648865a7cb017a0a58753555.jpg', 'UC201810180006', '2013款 宝马3系 320LiM运动套装', 'BMW', '宝马', 'BMW3', '3系', '320Li M运动套装', 29.88, 4.00, 4.74, 1529784534579, null, 3998, '国四', '8速AT', '2.0L', '中型车', '汽油', '5人', '无锡', 3.65, 1439784000000, 5.01, 35.88, '蓝色'),
];
var tailMoneyList = [
    new TailMoney('UC201810180001', 204400, 36, 8400),
    new TailMoney('UC201810180002', 175000, 36, 4800),
    new TailMoney('UC201810180003', 109800, 36, 3200),
    new TailMoney('UC201810180004', 167000, 36, 5300),
    new TailMoney('UC201810180005', 207000, 36, 5600),
    new TailMoney('UC201810180006', 187000, 36, 4600),
];
var userList = [
    new User(10001, '徐', '磊', '123@qq.com'),
    new User(10002, '李', '四', '453@qq.com'),
    new User(10003, '赵', '磊', '723@qq.com'),
    new User(10004, '陈', '磊', '923@qq.com'),
    new User(10005, '菜', '磊', '143@qq.com'),
];
app.get('/api', function (req, res) {
    res.send('Hello, express!');
});
app.get('/api/user-profit/userlist', function (req, res) {
    res.json(userList);
});
app.get('/api/usedcarlist', function (req, res) {
    var result = usedCarList;
    var params = req.query;
    if (params.vehicleBrand !== '-1' && params.vehicleBrand) {
        result = usedCarList.filter(function (p) { return p.brandCode.indexOf(params.vehicleBrand) !== -1; });
    }
    if (params.vehicleSeries !== null && params.vehicleSeries !== '-1' && params.vehicleSeries && result.length > 0) {
        result = usedCarList.filter(function (p) { return p.seriesCode.indexOf(params.vehicleSeries) !== -1; });
    }
    // if(result.length > 0 && params.sortBy){
    //     result = sortArr(result, params.sortBy, params.sortMode)
    // }
    res.json(result);
});
app.get('/api/usedcar/:productCode', function (req, res) {
    res.json(usedCarList.find(function (usedCar) { return usedCar.productCode == req.params.productCode; }));
});
app.get('/api/usedcar/:productCode/tailmoney', function (req, res) {
    res.json(tailMoneyList.filter(
    //根据请求的参数过滤出相应的车辆尾款信息
    function (tailMoney) { return tailMoney.productCode === req.params.productCode; }));
});
var server = app.listen(8000, 'localhost', function () {
    console.log('web服务已启动，地址是 http://localhost:8000');
});
var WatchProduct = (function () {
    function WatchProduct(productCode) {
        this.productCode = productCode;
    }
    return WatchProduct;
}());
//每个客户端de websocket连接及其订阅了哪些商品信息
var subscriptions = new Map();
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (websocket) {
    websocket.send('这是服务器主动推送的');
    websocket.on('message', function (message) {
        // 把字符串转成json
        var msgObj = JSON.parse(message);
        //通过key得到原来客户端得到关注的商品代码，如果为空则赋值一个空数组
        var productCodes = subscriptions.get(websocket) || [];
        //将客户端上传的商品代码加入到原先关注的商品代码中
        subscriptions.set(websocket, productCodes.concat([msgObj.productCode]));
    });
});
//定义一个集合存放每个商品最新的出价信息
var currentBids = new Map();
setInterval(function () {
    // if(wsServer.clients) {
    //     wsServer.clients.forEach(
    //         client => {
    //             client.send('这是定时推送的');
    //         }
    //     )
    // }
    usedCarList.forEach(function (usedCar) {
        //获取商品的最新报价，如果没有出价则默认为此商品的指导价
        var currentBid = currentBids.get(usedCar.productCode) || usedCar.directivePrice;
        //生成最新报价
        var newBid = currentBid + Math.random() * 0.5;
        //设置最新报价
        currentBids.set(usedCar.productCode, newBid);
    });
    subscriptions.forEach(function (productCodes, ws) {
        //数组转换
        var newBids = productCodes.map(function (productCode) { return ({
            producteCode: productCode,
            bid: currentBids.get(productCode)
        }); });
        ws.send(JSON.stringify(newBids));
    });
}, 2000);
