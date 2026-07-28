import type {NextConfig} from "next";
import path from "node:path";

const nextConfig: NextConfig = {
	// Без этого Next выбирает корнем воркспейса домашнюю папку (там лежит
	// посторонний package-lock.json) и Turbopack начинает следить за всем
	// её содержимым — отсюда огромный расход CPU и памяти в dev.
	turbopack: {
		root: path.join(__dirname),
	},

	images: {
		remotePatterns: [
			new URL('https://rickandmortyapi.com/api/**')
		]
	}
};

export default nextConfig;
