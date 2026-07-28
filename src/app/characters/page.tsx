import React, {Suspense} from 'react';
import {CharactersPage} from "@/views/character";
import {getCharacters} from "@/entities/character";


const Page = async () => {

	return (
		<Suspense>
			<CharactersPage/>
		</Suspense>
	);
};

export default Page;
