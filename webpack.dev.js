const path = require("path")

const { merge } = require("webpack-merge")
const common = require(path.resolve(__dirname, "webpack.common.js"))

module.exports = merge(common, {

	mode: "development",

	devtool: "inline-source-map",

	target: "web",

	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
			watch: true,
		},
		hot: true,
		watchFiles: [ "src/**/*" ],
		// Determine the port you want to work on (4 positions)
		port: 3000,
		//To have access from external devices of your same local network
		host: "local-ip",
		open: true,
		liveReload: true,
	},

	module: {
		rules: [

			// ==================== S T Y L E S ====================
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					"style-loader", // 3rd -- Inject styles into DOM
					{
						loader: "css-loader", // 2nd -- Turns CSS [manage @import and url()] into commonJS
						options: { sourceMap: true }
					},
					{
						loader: "sass-loader", // 1st -- Turns SASS into CSS
						options: { sourceMap: true }
					}
				]
			},

			// ==================== I M A G E S ====================
			{
				test: /\.(jpe?g|png|svg|gif|webp)$/i,
				type: "asset/resource",
			},

			// ==================== F O N T S ====================
			{
				test: /\.(otf|ttf|eot|woff2?)$/i,
				type: "asset/resource",
			},

			// ==================== P H P ====================
			{
				test: /\.php/,
				type: "asset/resource",
				generator: {
					filename: "[hash:8][ext][query]"
				}
			},
		]
	}
})
