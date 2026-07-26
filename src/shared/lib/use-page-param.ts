'use client'

import {useSearchParams} from "next/navigation";
import {parsePage} from "./parse-page";


export const usePageParam = () => parsePage(useSearchParams().get('page'))
