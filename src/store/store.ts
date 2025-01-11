import { configureStore } from '@reduxjs/toolkit'
// import { reducers } from '@/store/rootReducer'

export const store = configureStore({
	reducer: {},
	devTools: true
});

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
