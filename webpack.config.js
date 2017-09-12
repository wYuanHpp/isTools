var webpack = require('webpack');
module.exports = {
    entry: __dirname + "/src/index.ts",
    output: {
        path:__dirname + "/build",
        filename: "isTools.js"
    },
    output: {
        path:__dirname + "/test",
        filename: "isTools.js"
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: [ ".ts", ".tsx", ".js"]
    },
    devServer: {
		contentBase:"./test",
		historyApiFallback: true,
		port: 8080,
	},
    module: {
        loaders: [
            // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
            {
                test: /\.ts?$/, loader: "ts-loader",
                'exclude': [/node_modules/]
            }
        ]
    }
}