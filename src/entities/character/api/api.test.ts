import {describe, expect, it} from 'vitest'
import {http, HttpResponse} from 'msw'
import {server} from '@test/mocks/server'
import {ApiError} from '@/shared/api'
import {getCharacters} from './api'

const URL = 'https://rickandmortyapi.com/api/character'

describe('getCharacters', () => {
	it('возвращает список персонажей', async () => {
		server.use(
			http.get(URL, () =>
				HttpResponse.json({
					info: {count: 1, pages: 1, next: null, prev: null},
					results: [{id: 1, name: 'Rick Sanchez'}],
				}),
			),
		)

		const res = await getCharacters({page: 1})

		expect(res.results).toHaveLength(1)
		expect(res.results[0].name).toBe('Rick Sanchez')
	})

	it('передаёт параметры в query-строку', async () => {
		let requestUrl = ''
		server.use(
			http.get(URL, ({request}) => {
				requestUrl = request.url
				return HttpResponse.json({info: {count: 0, pages: 0, next: null, prev: null}, results: []})
			}),
		)

		await getCharacters({page: 3, status: 'Alive'})

		expect(requestUrl).toContain('page=3')
		expect(requestUrl).toContain('status=Alive')
	})

	it('бросает ApiError со статусом при ошибке HTTP', async () => {
		server.use(http.get(URL, () => new HttpResponse(null, {status: 404})))

		await expect(getCharacters({page: 999})).rejects.toThrowError(ApiError)
		await expect(getCharacters({page: 999})).rejects.toMatchObject({status: 404})
	})
})
