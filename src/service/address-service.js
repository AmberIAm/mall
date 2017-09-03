/*
* @Author: Administrator
* @Date:   2017-08-27 15:11:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-27 15:19:55
*/
'use strict';
var _common = require('util/common.js');
var _address = {
    // 获取地址列表
    getAddressList: function(resolve, reject){
        _common.request({
            url: _common.getServerUrl('/shipping/list.do'),
            data: {
                pageSize: 50
            },
            success: resolve,
            error: reject
        });
    },
    // 新建收件人
    save: function(addressInfo, resolve, reject){
        _common.request({
            url: _common.getServerUrl('/shipping/add.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 更新收件人
    update: function(addressInfo, resolve, reject){
        _common.request({
            url: _common.getServerUrl('/shipping/update.do'),
            data: addressInfo,
            success: resolve,
            error: reject
        });
    },
    // 删除收件人
    deleteAddress: function(shippingId, resolve, reject){
        _common.request({
            url: _common.getServerUrl('/shipping/del.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    },
    // 获取单条收件人信息
    getAddress: function(shippingId, resolve, reject){
        _common.request({
            url: _common.getServerUrl('/shipping/select.do'),
            data: {
                shippingId: shippingId
            },
            success: resolve,
            error: reject
        });
    }
};
module.exports = _address;