import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "img.icons8.com" },
			{ protocol: "http", hostname: "localhost" },
			{ protocol: "https", hostname: "cdn.brandfetch.io" },
			{ protocol: "https", hostname: "upload.wikimedia.org" },
			{ protocol: "https", hostname: "seaborn.pydata.org" },
		],
	},
};

export default nextConfig;
