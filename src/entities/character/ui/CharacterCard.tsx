'use client'

import React from 'react';
import {Character} from "@/entities/character";
import Image from "next/image";
import Link from "next/link";
import {Button, Card} from "@heroui/react";
import clsx from "clsx";
import {useRouter} from "next/navigation";

type TProps = {
	character: Character
}

const cardClass = 'w-full aspect-video rounded-md overflow-hidden'

export const CharacterCardSkeleton = () => {
	return (
		<div className={[cardClass, "animate-pulse bg-gray-700 h-full w-full"].join(' ')}>

		</div>
	)
}

const CharacterCard = (props: TProps) => {

	const router = useRouter()
	const aliveColor = props.character.status === 'Alive' ? '#00ff00' : props.character.status === 'Dead' ? '#9a0000' : '#037994'

	return (

		<Link href={`/characters/${props.character.id}`}>
			<Card className={'size-full relative overflow-hidden group aspect-video text-foreground'} variant={'transparent'}>
				<Image src={props.character.image} alt={props.character.name} width={300} height={300}
				       className={'rounded-xl absolute inset-0 size-full object-cover -z-1 dark:brightness-50 dark:blur-xs blur-md group-hover:blur-[0px] transition-all duration-300 scale-[1.2] group-hover:scale-100'}/>
				<Card.Header>
					<Card.Title className={'text-xl font-semibold text-foreground'}>
						{props.character.name}
					</Card.Title>
				</Card.Header>

				<Card.Content className={'bg-transparent'}>
				</Card.Content>
				<Card.Footer>
					<div className={'space-x-2'}>
						<p className={'font-semibold max-w-60 overflow-hidden text-ellipsis line-clamp-1'}>
							{props.character.location.name}
						</p>
						<div className={'flex items-center gap-2'}>
							<div className={clsx('size-2 rounded-full')} style={{background: aliveColor}}/>
							<p className={'opacity-55'}>
								{props.character.status}
							</p>
						</div>
					</div>
					<Button variant={'ghost'} className={'ml-auto'}
					        onClick={() => router.push(`/characters/${props.character.id}`)}>
						Подробнее
					</Button>
				</Card.Footer>
			</Card>
		</Link>
	);
};

export default CharacterCard;
