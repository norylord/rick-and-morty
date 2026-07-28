import {api} from "@/shared/api";
import type {PaginatedResponse} from '@/shared/model'
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

export const getCharacters = async (params: GetCharactersParams): Promise<PaginatedResponse<Character[]>> => {
	return api.get<PaginatedResponse<Character[]>>('/character', {
		params,
		next: {
			revalidate: false
		}
	})
}

export const getCharacter = async (id: number): Promise<Character> => {

	return await api.get<Character>(`/character/${id}`, {
		next: {
			revalidate: false
		}
	})

}
