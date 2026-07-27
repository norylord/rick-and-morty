import React from 'react';
import {Character, getCharacter} from "@/entities/character";
import {ApiError} from "@/shared/api";
import {notFound} from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {Card, Chip, Typography} from "@heroui/react";

type TProps = {
	id: number
}

const statusColor: Record<Character['status'], string> = {
	Alive: '#00ff00',
	Dead: '#9a0000',
	unknown: '#037994'
}

const genderLabel: Record<Character['gender'], string> = {
	Male: 'Мужской',
	Female: 'Женский',
	Genderless: 'Бесполый',
	unknown: 'Неизвестен'
}

const statusLabel: Record<Character['status'], string> = {
	Alive: 'Жив',
	Dead: 'Мёртв',
	unknown: 'Неизвестно'
}

const episodeNumber = (url: string) => url.split('/').pop()

const InfoRow = (props: { label: string, value: string }) => {
	return (
		<div className={'flex flex-col gap-1 border-b border-foreground/10 py-3'}>
			<span className={'text-sm uppercase tracking-wide opacity-55'}>{props.label}</span>
			<span className={'font-semibold'}>{props.value || '—'}</span>
		</div>
	)
}

export const CharacterDetailPage = async (props: TProps) => {
	let character

	try {
		character = await getCharacter(props.id)
	} catch (e) {
		if (e instanceof ApiError && e.status === 404) {
			return notFound()
		}
		throw e
	}

	const createdAt = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(new Date(character.created))

	return (
		<div className={'px-6 md:px-15 py-10 flex flex-col gap-10'}>
			<Link href={'/characters'} className={'w-fit uppercase font-semibold opacity-70 hover:opacity-100 transition-opacity'}>
				← К персонажам
			</Link>

			<div className={'grid gap-8 lg:grid-cols-[minmax(280px,380px)_1fr] items-start'}>
				<div className={'relative aspect-square w-full overflow-hidden rounded-2xl shadow-xl'}>
					<Image
						src={character.image}
						alt={character.name}
						fill
						priority
						sizes={'(max-width: 1024px) 100vw, 380px'}
						className={'object-cover'}/>
				</div>

				<div className={'flex flex-col gap-6'}>
					<div className={'flex flex-col gap-3'}>
						<Typography.Heading level={1} className={'text-3xl md:text-5xl font-bold'}>
							{character.name}
						</Typography.Heading>
						<div className={'flex items-center gap-2'}>
							<div className={'size-2.5 rounded-full'} style={{background: statusColor[character.status]}}/>
							<span className={'opacity-70'}>
								{statusLabel[character.status]} — {character.species}
							</span>
						</div>
					</div>

					<div className={'flex flex-wrap gap-2'}>
						<Chip variant={'soft'}>{character.species}</Chip>
						<Chip variant={'soft'}>{genderLabel[character.gender]}</Chip>
						{character.type && <Chip variant={'soft'}>{character.type}</Chip>}
						<Chip variant={'soft'} color={character.status === 'Alive' ? 'success' : character.status === 'Dead' ? 'danger' : 'default'}>
							{statusLabel[character.status]}
						</Chip>
					</div>

					<div className={'grid gap-x-8 sm:grid-cols-2'}>
						<InfoRow label={'Происхождение'} value={character.origin.name}/>
						<InfoRow label={'Последняя локация'} value={character.location.name}/>
						<InfoRow label={'Тип'} value={character.type}/>
						<InfoRow label={'Пол'} value={genderLabel[character.gender]}/>
						<InfoRow label={'Эпизодов'} value={String(character.episode.length)}/>
						<InfoRow label={'Добавлен'} value={createdAt}/>
					</div>
				</div>
			</div>

			<Card variant={'transparent'} className={'bg-background/40 rounded-2xl'}>
				<Card.Header>
					<Card.Title className={'text-xl font-semibold'}>
						Эпизоды
					</Card.Title>
					<Card.Description>
						Появлений: {character.episode.length}
					</Card.Description>
				</Card.Header>
				<Card.Content>
					<div className={'flex flex-wrap gap-2'}>
						{character.episode.map((url) => (
							<Chip key={url} variant={'secondary'} size={'sm'}>
								Эпизод {episodeNumber(url)}
							</Chip>
						))}
					</div>
				</Card.Content>
			</Card>
		</div>
	);
};

export default CharacterDetailPage;
