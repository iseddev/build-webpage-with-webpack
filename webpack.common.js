const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

	entry: { app: path.resolve("src", "js", "index.js") },

	module: {
		rules: [

			// ==================== J S ====================
			{
				test: /\.(js)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [ "@babel/preset-env" ],
							sourceMap: true
						}
					}
				]
			},

			// ==================== 	P U G ====================
			{
				test: /\.pug$/,
				use: [
					{
						loader: "simple-pug-loader",
						options: { basedir: path.resolve(__dirname, "src", "pug",) }
					}
				]
			},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "pug", "test.pug"),
			filename: path.resolve(__dirname, "dist", "index.html"),
		}),

		// ====================================================
		// ===== Add settings for handling your PUG files =====
		// ====================================================
		// new HtmlWebpackPlugin({
		// 	template: path.resolve(__dirname, "src", "pug", "pages", "sample.pug"),
		// 	filename: path.resolve(__dirname, "dist", "contacto", "index.html"),
		// 	favicon: path.resolve(__dirname, "src", "images", "favicon.png"),
		// }),
	]
}
