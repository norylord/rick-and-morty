type ResponseInfo = {
	count: number,
	pages: number,
	next: string | null,
	prev: string | null
}

export type PaginatedResponse<T> = {
	info: ResponseInfo
	results: T
}
