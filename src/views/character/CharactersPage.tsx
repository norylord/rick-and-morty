'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {characterQueries, CharactersListSkeleton} from "@/entities/character";
import {CharactersList} from "@/entities/character";
import {useRouter, useSearchParams} from "next/navigation";
import {ErrorState, PaginationControlled} from "@/shared/ui";
import {usePageParam, useQueryParams} from "@/shared/lib"
import {ApiError} from "@/shared/api";
import {CharactersFilter} from "@/features/characters";
import {EmptyState} from "@/shared/ui";


export const CharactersPage = () => {

	const searchParams = useSearchParams()
	const page = usePageParam()
	const router = useRouter()
	const {params} = useQueryParams()


	const {data, isPending, isError, error} = useQuery(characterQueries.list({page, name: params.get('name') || ''}))

	const goToPage = (nextPage: number) => {
		const params = new URLSearchParams(searchParams)
		params.set('page', String(nextPage))
		router.push(`?${params}`)
	}

	if (isError && error instanceof ApiError && error.status === 404) return <EmptyState className={'px-15'}/>

	if (isError) return <ErrorState errorCode={error instanceof ApiError ? error.status : undefined}/>

	if (isPending) return <CharactersListSkeleton/>

	return (
		<>
			<CharactersList characters={data.results}/>
			<div className={' h-20 flex justify-center items-center gap-4 w-full z-50'}>
				<PaginationControlled totalPages={data.info.pages} page={page} onChange={(v) => goToPage(v)}/>
			</div>
		</>
	);
};

export default CharactersPage;
