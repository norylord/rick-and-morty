import React from 'react';
import {CharacterDetailPage} from "@/views/character";


const Page = async ({params}: { params: Promise<{ id: string }> }) => {

	const routeParams = await params
	return (
		<CharacterDetailPage id={+routeParams.id}/>
	);
};

export default Page;
