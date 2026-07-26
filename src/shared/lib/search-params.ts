import {useSearchParams} from "next/navigation";

export const parsePage = (value: string | null) => {
	return Math.max(1, Math.floor(Number(value))) || 1
}

export const usePageParam = () => parsePage(useSearchParams().get('page'))
