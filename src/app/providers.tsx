'use client'

import React from 'react';
import {environmentManager, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {ThemeProvider} from "next-themes";
import {RouterProvider} from "@heroui/react";
import {useRouter} from "next/navigation";


declare global {
	interface Window {
		__TANSTACK_QUERY_CLIENT__?: QueryClient
	}
}

let browserQueryClient: QueryClient | undefined
const makeQueryClient = () => {
	return new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 60 * 1000,
				retry: false
			}
		}
	})
}

function getQueryClient() {
	if (environmentManager.isServer()) {
		return makeQueryClient() // на сервере — всегда новый клиент (иначе утечёт кэш между запросами)
	}
	browserQueryClient ??= makeQueryClient()
	return browserQueryClient
}

type TProps = {
	children: React.ReactNode
}

const Providers = ({children}: TProps) => {
	const queryClient = getQueryClient()
	const router = useRouter()

	// Только для браузерного расширения TanStack Query.
	// useEffect не выполняется на сервере, поэтому window здесь всегда есть.
	React.useEffect(() => {
		window.__TANSTACK_QUERY_CLIENT__ = queryClient
	}, [queryClient])

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false}/>
			<ThemeProvider attribute="class" defaultTheme="light">
				{/* Ссылки heroui (Breadcrumbs, Link) ходят через роутер Next, а не полной перезагрузкой */}
				<RouterProvider navigate={router.push}>
					{children}
				</RouterProvider>
			</ThemeProvider>
		</QueryClientProvider>
	);
};

export default Providers;
