/*
* @Author: Administrator
* @Date:   2017-08-27 17:51:03
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-27 23:20:39
*/

'use strict';
require('./index.css');
require('page/common/nav-simple/index.js');
var _common = require('util/common.js');

$(function(){
	var type = _common.getUrlParam('type') || 'default',
		$element = $('.' + type + '-success');
	// 显示对应的提示元素
	$element.show();
})