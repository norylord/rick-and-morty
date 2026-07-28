'use client'

import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";


export const useQueryParams = () => {

	const params = useSearchParams()
	const router = useRouter()

	const setParams = (data: Record<string, string | number | null | undefined>) => {
		const p = new URLSearchParams(params)
		Object.entries(data).forEach(([key, value]) => {
			if (value == null || value === '') p.delete(key)
			else p.set(key, String(value))
		})
		if (!data?.page) p.set('page', '1')

		router.replace(`?${p.toString()}`)
	}

	return {
		params,
		setParams
	}
}
