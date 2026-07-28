import React from 'react';
import Link from "next/link";
import {Input, Typography} from "@heroui/react";
import {ThemeSwitch} from "@/features";

const AppHeader = () => {
	return (
		<header className={"flex gap-5 items-center px-15 py-4 bg-background/70 shadow-xl"}>
			<Typography.Heading level={4} className={'whitespace-nowrap'}>
				Rick and Morty
			</Typography.Heading>
			<div className={'flex gap-15 justify-center flex-2'}>
				<Link href={'/characters'} className={'uppercase font-semibold '}>
					<Typography.Heading level={6}>
						Персонажи
					</Typography.Heading>
				</Link>
				<Link href={'/episodes'} className={'uppercase font-semibold '}>
					Эпизоды
				</Link>
			</div>
			<Input placeholder={'Поиск'} className={'flex-1'}/>
			<div className={'flex justify-end'}>
				<Link href={'https://github.com/norylord'} className={'uppercase font-semibold'}>
					GitHub
				</Link>
			</div>
			<ThemeSwitch/>
		</header>
	);
};

export default AppHeader;
