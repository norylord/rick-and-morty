import {defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	// Алиасы (@/…) берутся из tsconfig.json — Vite умеет это нативно.
	resolve: {tsconfigPaths: true},
	test: {
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		globals: true,
		// .env не читается в тестах: задаём базовый URL явно, чтобы прогон
		// не зависел от локального файла и работал в CI.
		env: {
			NEXT_PUBLIC_API_URL: 'https://rickandmortyapi.com/api',
		},
	},
})
