import {CharactersFilter} from "@/features/characters";

export default function CharactersLayout(
	{
		children,
	}: Readonly<{
		children: React.ReactNode;
	}>) {
	return (
		<section>
			<CharactersFilter/>
			{children}
		</section>
	);
}
