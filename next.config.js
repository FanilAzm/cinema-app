/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://cinema-api-lake.vercel.app/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://cinema-api-lake.vercel.app/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
