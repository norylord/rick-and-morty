import React from 'react';
import {FolderMagnifier} from '@gravity-ui/icons'
import {Typography} from "@heroui/react";

type TProps = {
	title?: string,
	className?: string,
}

export const EmptyState = (props: TProps) => {
	return (
		<div className={['mx-auto max-w-75 flex flex-col justify-center items-center', props.className ?? ''].join(' ')}>
			<FolderMagnifier className={'size-20'}/>
			<Typography.Heading level={4}>
				{props.title ?? 'Ничего не найдено'}
			</Typography.Heading>
			<Typography.Prose className={'text-center mt-2 opacity-50'}>
				Попробуйте изменить параметры поиска
			</Typography.Prose>
		</div>
	);
};

export default EmptyState;
