import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{ protocol: "https", hostname: "www.google.com" },
			{ protocol: "https", hostname: "picsum.photos" },
			{ protocol: "https", hostname: "raw.githubusercontent.com" },
			{ protocol: "http", hostname: "localhost" },
		],
	},
};

export default nextConfig;
