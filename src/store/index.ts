import { configureStore } from '@reduxjs/toolkit'

import carrinhoR from './reducers/carrinhoR'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoR,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
