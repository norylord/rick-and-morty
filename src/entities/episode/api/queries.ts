import {getEpisode, getEpisodes, GetEpisodeParams} from "@/entities/episode";
import {keepPreviousData, queryOptions} from "@tanstack/react-query";

export const episodeQueries = {
	list: (params: GetEpisodeParams) =>
		queryOptions({
			queryKey: ['episodes', params],
			queryFn: () => getEpisodes(params),
			placeholderData: keepPreviousData
		}),
	episode: (id: string) =>
		queryOptions({
			queryKey: ['episodes', id],
			queryFn: () => getEpisode(id),
			placeholderData: keepPreviousData
		})
}
