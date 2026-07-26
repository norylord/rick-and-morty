import {api, ApiError, PaginatedResponse} from "@/shared/";
import {Character} from "../model/type";

type FilterCharactersParams = Partial<{
	name: Character['name'],
	status: Character['status'],
	species: Character['species'],
	type: Character['type'],
	gender: Character['gender']
}>

type PaginationCharactersParams = {
	page: number
}

export type GetCharactersParams = FilterCharactersParams & PaginationCharactersParams

const EMPTY_RESPONSE: PaginatedResponse<Character[]> = {
	info: {count: 0, pages: 0, next: null, prev: null},
	results: [],
}

export const getCharacters = async (params: GetCharactersParams): Promise<PaginatedResponse<Character[]>> => {
	try {
		return await api.get<PaginatedResponse<Character[]>>('/character', {params})
	} catch (e) {
		throw e
	}
}
