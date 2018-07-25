var webpack = require('webpack');
var path= require('path');
var htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

	entry:'./src/index.js',
	output:{
		filename:'./app.js'
	},
	plugins:[
		new htmlWebpackPlugin({
		filename:'index.html',
		template:'index.html',
		inject:'true'})
	],
	devServer:{
	
	    contentBase: path.join(__dirname,"dist")

	},
	resolve:{
	
	    alias: {
	      'vue$':'vue/dist/vue.esm.js'
	    }
	}

}
