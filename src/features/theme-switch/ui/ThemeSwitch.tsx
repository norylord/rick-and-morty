"use client";

import {useTheme} from "next-themes";

// Внешний вид полностью описан через dark:-варианты, а не через состояние React.
// Класс на <html> ставит next-themes скриптом до первой отрисовки, поэтому
// свитч сразу рисуется в нужной теме: ни мигания, ни расхождения гидратации.
export function ThemeSwitch() {
	const {resolvedTheme, setTheme} = useTheme();

	return (
		<button
			type="button"
			aria-label="Переключить тему"
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			className={[
				"group relative h-8 w-16 shrink-0 cursor-pointer rounded-full",
				"border border-foreground/15 bg-foreground/5",
				"transition-colors duration-300",
				"hover:bg-foreground/10",
				"focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40",
			].join(" ")}
		>
			{/* В светлой теме бегунок акцентный (белое солнце на синем),
			    в тёмной — светлый, чтобы читалась чёрная луна */}
			<span
				className={[
					"absolute left-1 top-1 grid size-6 place-items-center overflow-hidden rounded-full",
					"bg-primary dark:bg-foreground",
					"translate-x-0 dark:translate-x-8",
					"transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
				].join(" ")}
			>
				{/* Солнце */}
				<svg
					viewBox="0 0 24 24"
					aria-hidden
					className={[
						"absolute size-4 text-white transition-all duration-500",
						"rotate-0 scale-100 opacity-100",
						"dark:rotate-90 dark:scale-0 dark:opacity-0",
					].join(" ")}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
				>
					<circle cx="12" cy="12" r="4" fill="currentColor" stroke="none"/>
					<path
						d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>
				</svg>

				{/* Луна */}
				<svg
					viewBox="0 0 24 24"
					aria-hidden
					className={[
						"absolute size-4 text-black transition-all duration-500",
						"-rotate-90 scale-0 opacity-0",
						"dark:rotate-0 dark:scale-100 dark:opacity-100",
					].join(" ")}
					fill="currentColor"
				>
					<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>
				</svg>
			</span>
		</button>
	);
}
