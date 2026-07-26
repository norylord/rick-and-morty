import {keepPreviousData, queryOptions} from "@tanstack/react-query";
import {getCharacters, GetCharactersParams} from "./api";

export const characterQueries = {
	list: (params: GetCharactersParams) =>
		queryOptions({
			queryKey: ['characters', params],
			queryFn: () => getCharacters(params),
			placeholderData: keepPreviousData
		}),
}
