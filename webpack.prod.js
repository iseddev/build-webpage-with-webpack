const path = require("path")

const { merge } = require("webpack-merge")
const common = require(path.resolve(__dirname, "webpack.common.js"))

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const SitemapWebpackPlugin = require("sitemap-webpack-plugin").default
const TerserWebpackPlugin = require("terser-webpack-plugin")


// ===== Update to create the sitemap.xml and sitemap.xml.gz files =====
// Your REAL website URL
const websiteUrl = "https://myWebsiteName.com"
// Sections/pages of your website
const paths = ["/", "/contact/", "/about/" ]

module.exports = merge(common, {

	mode: "production",

	output: {
		path: path.resolve(__dirname, "dist", "assets/"),
		filename: "js/[name].[contenthash:8].min.js",
		// We determine the output path of images, fonts, videos, pdf, etc...
		assetModuleFilename : "assets/",
	},

	optimization: {
		minimizer: [
			new CssMinimizerWebpackPlugin({
				minimizerOptions: {
					preset: [
						"default",
						{ discardComments: { removeAll: true } }
					]
				}
			}),
			new TerserWebpackPlugin({ terserOptions: { sourceMap: true } })
		]
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename:"styles/styles.[contenthash:8].min.css",
			chunkFilename: "[id].css",
		}),
		new SitemapWebpackPlugin({ base: websiteUrl, paths }),
		new CleanWebpackPlugin(),
	],

	module: {
		rules: [

			// ==================== S T Y L E S ====================
			{
				test: /\.(sa|sc|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader, // 3rd Extract CSS files
					{
						loader: "css-loader", // 2nd -- Turns CSS [manage @import and url()] into commonJS
						options: { sourceMap: true }
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: { plugins: [ [ "postcss-preset-env", "autoprefixer" ] ] },
							sourceMap: true,
						}
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
				generator: { filename: "images/[name].[hash:8][ext]" }
			},

			// ==================== F O N T S ====================
			{
				test: /\.(otf|ttf|eot|woff2?)$/i,
				type: "asset/resource",
				generator : { filename: "fonts/[name].[hash:8][ext]" },
			},

			// ==================== P H P ====================
			{
				test: /\.php/,
				type: "asset/resource",
				generator: {
					filename: "php/[name].[hash:8][ext][query]"
				}
			},
		]
	},
})
