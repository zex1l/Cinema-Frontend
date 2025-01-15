'use client'
import { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Toaster from '@/components/ui/Toaster/Toaster'
import Layout from '@/components/layout/Layout'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import AuthProvider from './AuthProvider/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

const MainProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Toaster />
				<Layout>{children}</Layout>
			</QueryClientProvider>
		</Provider>
	)
}

export default MainProvider
