"use client";

import {Pagination} from "@heroui/react";

type TProps = {
	page: number,
	totalPages: number,
	onChange: (v: number) => void
}

export function PaginationControlled(props: TProps) {

	const getPageNumbers = () => {
		const pages: (number | "ellipsis")[] = [];

		if (props.totalPages <= 7) {
			for (let i = 1; i <= props.totalPages; i++) {
				pages.push(i);
			}
		} else {
			pages.push(1);

			if (props.page > 3) {
				pages.push("ellipsis");
			}

			const start = Math.max(2, props.page - 1);
			const end = Math.min(props.totalPages - 1, props.page + 1);

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (props.page < props.totalPages - 2) {
				pages.push("ellipsis");
			}

			pages.push(props.totalPages);
		}

		return pages;
	};

	return (
		<Pagination className={'justify-center'}>
			<Pagination.Content>
				<Pagination.Item>
					<Pagination.Previous isDisabled={props.page === 1} onPress={() => props.onChange(props.page - 1)}>
						<Pagination.PreviousIcon/>
						<span>Назад</span>
					</Pagination.Previous>
				</Pagination.Item>
				{getPageNumbers().map((p, i) =>
					p === "ellipsis" ? (
						<Pagination.Item key={`ellipsis-${i}`}>
							<Pagination.Ellipsis/>
						</Pagination.Item>
					) : (
						<Pagination.Item key={p}>
							<Pagination.Link isActive={p === props.page} onPress={() => props.onChange(p)}>
								{p}
							</Pagination.Link>
						</Pagination.Item>
					),
				)}
				<Pagination.Item>
					<Pagination.Next isDisabled={props.page === props.totalPages} onPress={() => props.onChange(props.page + 1)}>
						<span>Вперед</span>
						<Pagination.NextIcon/>
					</Pagination.Next>
				</Pagination.Item>
			</Pagination.Content>
		</Pagination>
	);
}
