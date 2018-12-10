module.exports = {
	entry: {
		vendor: [
			'rxjs'
		],
		bundle: __dirname + "/src/day1/day1-part1"
	},
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.txt$/,
				use: 'raw-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	}
};