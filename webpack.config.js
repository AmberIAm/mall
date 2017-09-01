var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path              = require('path');
// 获取html-webpack-plugin参数的方法
var getHtmlConfig = function(name, title){
	return {
		template: './src/view/' + name + '.html',
 		filename: 'view/' + name + '.html',
		title: title,
 		inject: true,
 		hash: true,
 		chunks: ['common', name]
	};
};
// webpack配置
var config = {
     entry: {
     	'common': ['./src/page/common/index.js', 'webpack-dev-server/client?http://localhost:8088/'],
     	'index': ['./src/page/index/index.js'],
     	'list': ['./src/page/list/index.js'],
     	'detail': ['./src/page/detail/index.js'],
     	'cart': ['./src/page/cart/index.js'],
     	'user-login': ['./src/page/user-login/index.js'],
		'user-register': ['./src/page/user-register/index.js'],
		'user-pass-reset': ['./src/page/user-pass-reset/index.js'],
		'user-center': ['./src/page/user-center/index.js'],
		'user-center-update': ['./src/page/user-center-update/index.js'],
		'user-pass-update': ['./src/page/user-pass-update/index.js'],
	    'result': ['./src/page/result/index.js']
     },
     output: {
         path    : path.resolve(__dirname, 'dist'),
         publicPath : '/dist',
         filename: 'js/[name].js'
     },
     // 引进jquery
     externals: {
     	'jquery': 'window.jQuery'
     },
     module: {
     	loaders: [
     		{
     			// 解析css
     			test: /\.css$/, 
     			loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader' })
     		},
     		{
     			// 解析图片和icon-font
     			test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, 
     			loader: 'url-loader?limit=100&name=resource/[name].[ext]'
     		},
               {
                    test: /\.string$/, 
                    loader: 'html-loader'
               }
     	]
     },
     // 配置别名
     resolve : {
     	alias : {
		    node_modules : path.resolve(__dirname, './node_modules'),
     		util : path.resolve(__dirname, './src/util'),
     		page : path.resolve(__dirname, './src/page'),
     		service : path.resolve(__dirname, './src/service'),
     		image : path.resolve(__dirname, './src/image')
     	}
     },
     plugins: [
     	// 独立通用模块至base.js
     	new webpack.optimize.CommonsChunkPlugin({
     		name    : 'common',
     		filename: 'js/base.js'
     	}),
     	// css单独打包
     	new ExtractTextPlugin('css/[name].css'),
     	// html模板的处理
     	new HtmlWebpackPlugin(getHtmlConfig('index', '首页')),
     	new HtmlWebpackPlugin(getHtmlConfig('list', '商品列表页')),
     	new HtmlWebpackPlugin(getHtmlConfig('detail', '商品详情页')),
     	new HtmlWebpackPlugin(getHtmlConfig('cart', '购物车')),
     	new HtmlWebpackPlugin(getHtmlConfig('user-login', '用户登录')),
		new HtmlWebpackPlugin(getHtmlConfig('user-register', '用户注册')),
		new HtmlWebpackPlugin(getHtmlConfig('user-pass-reset', '找回密码')),
		new HtmlWebpackPlugin(getHtmlConfig('user-center', '个人中心')),
		new HtmlWebpackPlugin(getHtmlConfig('user-center-update', '修改个人信息')),
		new HtmlWebpackPlugin(getHtmlConfig('user-pass-update', '修改密码')),
		new HtmlWebpackPlugin(getHtmlConfig('result', '操作结果'))
     ]
 };
module.exports = config;