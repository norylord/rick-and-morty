export const parseIds = (ids: number[]) => {
	return ids.filter(i => !isNaN(+i)).join(',')
}

export const parseEpisodeIds = (episodes: string[]): string => {
	const ids =  episodes.map(i => {
		const id = i.split('/').pop()
		if (id) return +id
	}).filter(i => i !== undefined)

	return parseIds(ids)
}
