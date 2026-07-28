import React from 'react';
import {CharacterDetailPage} from "@/views/character";
import {getCharacters} from "@/entities/character";


export async function generateStaticParams() {
	const characters = await getCharacters({page: 1})

	return characters.results.map((character) => {
		return {
			id: String(character.id)
		}
	})
}

const Page = async ({params}: { params: Promise<{ id: string }> }) => {

	const routeParams = await params
	return (
		<CharacterDetailPage id={+routeParams.id}/>
	);
};

export default Page;
