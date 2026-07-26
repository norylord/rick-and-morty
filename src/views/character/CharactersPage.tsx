'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {characterQueries, CharactersListSkeleton} from "@/entities/character";
import {CharactersList} from "@/entities/character";
import {useRouter, useSearchParams} from "next/navigation";
import {ErrorState, PaginationControlled} from "@/shared/ui";
import {usePageParam} from "@/shared/lib"
import {ApiError} from "@/shared/api";


export const CharactersPage = () => {

	const searchParams = useSearchParams()
	const page = usePageParam()
	const router = useRouter()


	const {data, isPending, isError, error} = useQuery(characterQueries.list({page}))

	const goToPage = (nextPage: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', String(nextPage))
		router.push(`?${params}`)
	}

	if (isError) return <ErrorState errorCode={error instanceof ApiError ? error.status : undefined}/>

	if (isPending) return <CharactersListSkeleton/>

	return (
		<>
			<CharactersList characters={data.results}/>
			<div
				className={'fixed h-20 flex justify-center items-center gap-4 w-full bottom-0 bg-background z-50'}>
				<PaginationControlled totalPages={data.info.pages} page={page} onChange={(v) => goToPage(v)}/>
			</div>
		</>
	);
};

export default CharactersPage;
