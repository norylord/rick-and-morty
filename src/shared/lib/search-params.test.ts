import {describe, expect, it} from "vitest";
import {parsePage} from "@/shared/lib";

describe('search-params', () => {
	const variants = [
		{
			value: '3',
			expect: 3,
		},
		{
			value: '-5',
			expect: 1,
		},
		{
			value: '2.7',
			expect: 2,
		},
		{
			value: 'abc',
			expect: 1
		},
		{
			value: null,
			expect: 1
		},
		{
			value: '',
			expect: 1
		}
	]

	it.each(variants)('parsePage($value) → $expect', (a) => {
		expect(parsePage(a.value)).toBe(a.expect)
	})
})
