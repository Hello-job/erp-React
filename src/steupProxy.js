const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
	// app.use(
	// 	'/api',
	// 	createProxyMiddleware({
	// 		target: 'https://erpm-dev.hiseemedical.com/api',
	// 		ws: true, // 是否启用websockets
	// 		changeOrigin: true,
	// 		pathRewrite: {
	// 			//路径替换
	// 			'^/api': '',
	// 		},
	// 	})
	// )
      app.use(
			createProxyMiddleware('/static', {
				target: 'https://erpm-dev.hiseemedical.com/api',
				changeOrigin: true,
				pathRewrite: {
					'^/static': '',
				},
			})
		)
}
