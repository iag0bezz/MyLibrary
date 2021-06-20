import { createStore } from 'redux'
import storeSync from 'redux-localstore'

import reducer from './reducers'

export const store = createStore(reducer)

storeSync(store)