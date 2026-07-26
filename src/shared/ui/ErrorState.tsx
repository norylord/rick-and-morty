import React from 'react';

type TProps = {
	errorCode?: number
}

type TErrorConfig = {
	title: string,
	description: string
}

export const ErrorState = (props: TProps) => {

	const getErrorConfig = (): TErrorConfig => {
		switch (props.errorCode) {
			case 404 : {
				return {
					title: '404',
					description: 'Страницы не существует'
				}
			}
			case 500: {
				return {
					title: 'Внутренняя ошибка сервера',
					description: 'Повторите попытку позднее'
				}
			}
			default: {
				return {
					title: 'Непредвиденная ошибка',
					description: 'Попробуйте позже'
				}
			}
		}
	}

	const config = getErrorConfig()

	return (
		<div className={'flex justify-center items-center flex-col'}>
			<p className={'text-md md:text-lg lg:text-8xl'}>
				{config.title}
			</p>
			<p className={'text-xs md:text-sm lg:text-lg opacity-60'}>
				{config.description}
			</p>
		</div>
	);
};

export default ErrorState;
