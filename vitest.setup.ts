import '@testing-library/jest-dom/vitest'
import {afterAll, afterEach, beforeAll} from 'vitest'
import {server} from './test/mocks/server'

// MSW перехватывает сетевые запросы: тесты не ходят в реальный API.
beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
