import React from 'react'
import Heading from '@/components/ui/heading/Heading'
import { Metadata } from 'next'
import AuthProvider from '@/providers/AuthProvider/AuthProvider'

export const metadata: Metadata = {
	title: 'Page not found',
	robots: {
		index: false,
		follow: true,
	},
}

const NotFound = () => {
	return (
		<AuthProvider Component={{}}>
			<Heading title="404 - Page not found" />
		</AuthProvider>
	)
}

export default NotFound
