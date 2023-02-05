import { configureStore } from '@reduxjs/toolkit'

import { redusers } from './rootReducer'

export const store = configureStore({
	reducer: redusers,
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
