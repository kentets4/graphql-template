module.exports = {
	apps: [
		{
			name: "app",
			script: "./dist/app.js",
			node_args : '--experimental-specifier-resolution=node',
			env: {
				// NODE_ENV: 'production'
			},
		},
	],
};
