'use strict';
require('./index.css');
require('page/common/nav/index.js');
require('page/common/header/index.js');
var _common = require('util/common.js');
var _payment = require('service/payment-service.js');
var templateIndex = require('./index.string');

// page 逻辑部分
var page = {
    data: {
        orderNumber: _common.getUrlParam('orderNumber')
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        // 加载detail数据
        this.loadPaymentInfo();
    },
    // 加载订单列表
    loadPaymentInfo: function () {
        var _this = this,
            paymentHtml = '',
            $pageWrap = $('.page-wrap');
        $pageWrap.html('<div class="loading"></div>');
        _payment.getPaymentInfo(this.data.orderNumber, function (res) {
            paymentHtml = _common.renderHtml(templateIndex, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus();
        }, function (errMsg) {
            $pageWrap.html('<p class="err-tip">' + errMsg + '</p>');
        })
    },
    // 监听订单状态
    listenOrderStatus: function () {
        var _this = this;
        _this.paymentTimer = window.setInterval(function () {
            console.log(_this.data.orderNumber);
            _payment.getPaymentStatus(_this.data.orderNumber, function (res) {
                if(res === true) {
                    window.location.href
                        = './result.html?type=payment&orderNumber=' + _this.data.orderNumber;
                    console.log("111" + _this.data.orderNumber);
                }
            })
        }, 5000)
    }
};
$(function () {
    page.init();
});
