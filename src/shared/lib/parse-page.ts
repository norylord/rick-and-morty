export const parsePage = (value: string | null) => {
	return Math.max(1, Math.floor(Number(value))) || 1
}
