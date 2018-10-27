const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	// these are used to tell our server what has to be compiled and from where
	entry: path.join(__dirname, 'src', 'index.js'),
	// It also tells where to put the outputted compiled version
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'index.bundle.js'
	},
	// this is the mode of our output. We are setting it to ‘development’.
	// If in the scripts we specify the NODE_ENV variable,
	// it will take that one instead. See the below example on how to use NODE_ENV
	// (note that the below changes will not be made inside the package.json file
	// in this tutorial, it is just an example for you to see how it works)
	mode: process.env.NODE_ENV || 'production',
	// this is used so that we can import anything from src folder in relative
	// paths instead of absolute ones. It is the same for the node_modules.
	// We can import anything from node_modules directly without absolute paths
	resolve: {
		modules: [path.resolve(__dirname, 'src'), 'node_modules']
	},
	// this tells the webpack-dev-server what files are needed to be served.
	// Everything from our src folder needs to be served (outputted) in the browser
	devServer: {
		contentBase: path.join(__dirname, 'src')
	},
	// here we set what plugins we need in our app. As of this moment we only need
	// the html-webpack-plugin which tells the server that the index.bundle.js
	// should be injected (or added if you will) to our index.html file
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html')
		})
	]
}
