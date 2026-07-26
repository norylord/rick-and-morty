# 📋 План пет-проекта: Rick and Morty (Next.js 16 App Router / React 19 / TS / Tailwind 4)

> ⚠️ Перед каждым этапом кодинга читать гайды в `node_modules/next/dist/docs/` — эта версия Next.js содержит breaking changes.

Оценка: ~10 рабочих дней. Начиная с этапа 2 писать хотя бы один тест на каждую фичу — этап 4 использовать как добор.

Архитектура — FSD, памятка по раскладке кода: [FSD.md](./FSD.md).

## Этап 0. Фундамент (0.5 дня)

- [x] Прочитать доки Next: App Router (routing, layouts), data fetching, caching
- [x] Включить strict-режим TS (`"strict": true`), проверить ESLint
- [x] Структура FSD: `src/app` (роуты Next) + `src/views`, `src/widgets`, `src/features`, `src/entities`, `src/shared`
- [x] ESLint-правила FSD: запрет импортов в обход публичного API (`no-restricted-imports` в `eslint.config.mjs`)
- [ ] Добавить Prettier
- [ ] GitHub-репозиторий, защитить `main` (PR-only)

## Этап 1. API-слой и типизация (1 день)

- [x] `shared/api`: типизированный fetch-клиент (`api.get<T>`, `ApiError`, сборка URL с query-параметрами)
- [x] `shared/model`: `PaginatedResponse<T>`
- [x] `entities/character`: тип `Character` (union-типы для `status`/`gender`), `getCharacters` с обработкой 404 → пустой результат
- [ ] `entities/episode`, `entities/location` — типы и запросы
- [ ] Задать стратегию кэширования fetch (`cache` / `next.revalidate`) в запросах

🎯 Скиллы: generics, discriminated unions, narrowing

## Этап 2. Страницы на Server Components (2–3 дня)

- [x] Роут `/characters` → тонкий `page.tsx` + `views/character` (пока Client Component с `useQuery`)
- [x] Общий `layout.tsx` с навигацией (`widgets/AppHeader`)
- [ ] Пагинация через `searchParams` (сейчас `page` захардкожен в `useState`)
- [ ] Перевести `/characters` на Server Component с серверным fetch
- [ ] `/characters/[id]` — динамический сегмент (`params`), `generateStaticParams` + кэширование
- [ ] `/episodes`, `/locations` — аналогично
- [ ] `loading.tsx` (suspense-стриминг), `error.tsx` (client error boundary), `not-found.tsx` + `notFound()` для каждого роута

🎯 Скиллы: Server vs Client Components, границы `'use client'`, suspense-стриминг, кэширование Next

## Этап 3. Интерактив — Client Components (2–3 дня)

- [ ] Поиск с debounce + фильтры (status, gender, species) через URL: `useSearchParams` + `useRouter` / `usePathname` — состояние в URL, а не в useState
- [ ] Избранное на `localStorage`: хук `useFavorites`, контекст + `useReducer` (без zustand на старте)
- [ ] Тёмная тема (Tailwind + `prefers-color-scheme`)

🎯 Скиллы: `useEffect`, `useMemo`, `useCallback`, `useReducer`, контроль ре-рендеров

## Этап 4. TanStack Query в App Router (1 день)

- [x] Установить `@tanstack/react-query` + devtools
- [x] `src/app/providers.tsx` (`'use client'`): `QueryClientProvider`; клиент через модульный синглтон (`environmentManager.isServer()` → новый клиент на сервере, синглтон в браузере), не через `useState`
- [x] Подключить `<Providers>` в `src/app/layout.tsx`
- [x] `staleTime > 0` в defaultOptions, чтобы клиент не рефетчил сразу после гидратации
- [x] Query-фабрика `characterQueries.list()` через `queryOptions` + `useQuery` в списке персонажей
- [ ] `placeholderData: keepPreviousData` — чтобы список не схлопывался при смене страницы
- [ ] `useInfiniteQuery` для infinite scroll в избранном
- [ ] SSR-префетч: Server Component → `queryClient.prefetchQuery` → `<HydrationBoundary state={dehydrate(queryClient)}>`; `queryKey` на сервере и клиенте совпадают
- [ ] Перенести `@tanstack/react-query-devtools` в `devDependencies`
- [ ] Установить `@tanstack/eslint-plugin-query`

🎯 Скиллы: server state vs client state, кэш, инвалидация, гидратация

## Этап 5. Тесты (2 дня)

- [ ] Vitest + React Testing Library: api-клиент (fetch мокать через MSW), хуки, компоненты (карточка, фильтры, пагинация); компоненты с `useQuery` оборачивать в тестовый `QueryClientProvider`
- [ ] Playwright E2E: «поиск персонажа», «добавить в избранное», «пагинация»

🎯 Принцип: тестировать поведение, а не реализацию; покрытие не гнать

## Этап 6. CI/CD (1 день)

- [ ] GitHub Actions на PR: `lint` → `typecheck` (`tsc --noEmit`) → `vitest` → `build` → `playwright` (отдельный job)
- [ ] Кэширование npm-зависимостей в CI
- [ ] Деплой на Vercel: автодеплой из `main`, preview на PR
- [ ] Бейджи статуса в README

## Этап 7. Полировка для портфолио (1–2 дня)

- [ ] README: скриншоты, стек, архитектурные решения, команды запуска
- [ ] Lighthouse-аудит (перфоманс, a11y, SEO)
- [ ] Метатеги через `generateMetadata`, `next/image`
- [ ] A11y: семантика, фокус, aria на фильтрах

## Опционально

- [ ] Storybook
- [ ] Husky + lint-staged (pre-commit)
