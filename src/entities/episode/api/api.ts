import {api} from "@/shared/api";
import type {PaginatedResponse} from '@/shared/model'
import {Episode} from "../model/episode";

type FilterEpisodeParams = Partial<{
	name: Episode['name'],
	code: Episode['episode']
}>

type PaginationEpisodeParams = {
	page: number
}

export type GetEpisodeParams = FilterEpisodeParams & PaginationEpisodeParams

export const getEpisodes = async (params: GetEpisodeParams): Promise<PaginatedResponse<Episode[]>> => {
	return api.get<PaginatedResponse<Episode[]>>('/episode', {
		params,
		next: {
			revalidate: false
		}
	})
}

export const getEpisode = async (id: string): Promise<Episode | Episode[]> => {

	return await api.get<Episode>(`/episode/${id}`, {
		next: {
			revalidate: false
		}
	})

}
