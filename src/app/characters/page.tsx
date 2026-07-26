import React, {Suspense} from 'react';
import {CharactersPage} from "@/views/character";

const Page = async () => {

	return (
		<Suspense>
			<CharactersPage/>
		</Suspense>
	);
};

export default Page;
