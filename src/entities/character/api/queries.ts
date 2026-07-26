import {keepPreviousData, queryOptions} from "@tanstack/react-query";
import {getCharacter, getCharacters, GetCharactersParams} from "./api";

export const characterQueries = {
	list: (params: GetCharactersParams) =>
		queryOptions({
			queryKey: ['characters', params],
			queryFn: () => getCharacters(params),
			placeholderData: keepPreviousData
		}),
	character: (id: number) =>
		queryOptions({
			queryKey: ['character', id],
			queryFn: () => getCharacter(id),
		}),
}
