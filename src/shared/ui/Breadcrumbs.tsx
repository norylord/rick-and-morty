import React from 'react';
import {Breadcrumbs as HeroBreadcrumbs} from "@heroui/react";

export type TBreadcrumb = {
	label: string
	href?: string
}

type TProps = {
	items: TBreadcrumb[]
	className?: string
}

export const Breadcrumbs = (props: TProps) => {
	return (
		<HeroBreadcrumbs className={props.className}>
			{props.items.map((item) => (
				<HeroBreadcrumbs.Item key={item.label} href={item.href}>
					{item.label}
				</HeroBreadcrumbs.Item>
			))}
		</HeroBreadcrumbs>
	);
};

export default Breadcrumbs;
