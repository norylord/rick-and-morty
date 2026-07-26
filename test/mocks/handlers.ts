import {http, HttpResponse} from 'msw'

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'https://rickandmortyapi.com/api'

// Хендлеры по умолчанию — «счастливый путь».
// Отдельный тест может переопределить их через server.use(...).
export const handlers = [
	http.get(`${BASE_URL}/character`, () =>
		HttpResponse.json({
			info: {count: 826, pages: 42, next: null, prev: null},
			results: [],
		}),
	),
]
