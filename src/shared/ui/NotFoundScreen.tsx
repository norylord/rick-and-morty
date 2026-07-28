import React from 'react';
import {Typography} from "@heroui/react";


export const NotFoundScreen = () => {
	return (
		<div className={'h-full w-full flex justify-center items-center flex-col gap-4'}>

			<Typography.Heading level={1} className={'text-[240px]'}>
				404
			</Typography.Heading>
			<Typography.Heading level={2}>
				Ничего не найдено
			</Typography.Heading>
			<Typography.Prose>
				Попробуйте изменить фильтры или повторите попытку позднее.
			</Typography.Prose>
			<Typography.Paragraph className={'opacity-55'}>
				Возможно в скором времени контент, что вы ищете -
				появится)
			</Typography.Paragraph>
		</div>
	);
};

export default NotFoundScreen;
