/** @type {import("@rspack/core").Configuration} */
module.exports = {
	mode: "production",
	module: {
		rules: [
			{
				test: /[\\/]node_modules[\\/]lodash-es[\\/].*\.js$/,
				loader: "builtin:swc-loader"
			}
		]
	},
	optimization: {
		concatenateModules: true,
		minimize: false,
		providedExports: true,
		sideEffects: true,
		usedExports: true
	}
};
