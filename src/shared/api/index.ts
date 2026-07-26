export class ApiError extends Error {
	constructor(
		readonly status: number,
		message: string,
	) {
		super(message)
		this.name = 'ApiError'
	}
}

type QueryParams = Record<string, string | number | boolean | undefined>

type RequestOptions = Omit<RequestInit, 'method' | 'body'> & {
	params?: QueryParams
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

// Нельзя использовать new URL(path, BASE_URL): путь с ведущим "/" затирает
// базовый путь вроде "/api". Поэтому конкатенация строк.
const buildUrl = (path: string, params?: QueryParams): string => {
	if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_URL is not defined')

	const url = new URL(BASE_URL + path)
	Object.entries(params ?? {}).forEach(([key, value]) => {
		if (value !== undefined) url.searchParams.set(key, String(value))
	})
	return url.toString()
}

export const api = {
	get: async <T>(path: string, options: RequestOptions = {}): Promise<T> => {
		const {params, ...init} = options
		const res = await fetch(buildUrl(path, params), init)

		if (!res.ok) {
			throw new ApiError(res.status, `GET ${path} → ${res.status} ${res.statusText}`)
		}
		return await res.json() as Promise<T>
	},
}
