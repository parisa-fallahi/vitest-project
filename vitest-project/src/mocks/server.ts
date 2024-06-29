import {setupServer} from 'msw/node'
import {handler} from '../mocks/handles'

export const server =setupServer(...handler) 