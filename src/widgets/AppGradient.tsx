import React from 'react';


export const AppGradient = () => {
	return (
		<div className={'fixed w-full h-full inset-0 -z-10 blur-[200px]'}>
			<div className={'relative size-full'}>
				<div
					className={'w-1/2 aspect-square rounded-full left-0 top-0 -translate-1/4 bg-conic from-secondary-900 to-secondary-400 opacity-25'}></div>
				<div
					className={'w-1/2 aspect-square rounded-full right-0 bottom-0  translate-1/4 absolute bg-conic from-primary-900 to-primary-400 opacity-25'}></div>
			</div>

		</div>
	);
};

export default AppGradient;
