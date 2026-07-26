import {api, PaginatedResponse} from "@/shared/";
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
	return api.get<PaginatedResponse<Character[]>>('/character', {params})
}
