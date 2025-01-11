import React from 'react'
import Heading from '@/components/ui/heading/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Page not found',
	robots: {
		index: false,
		follow: true,
	},
}

const NotFound = () => {
	return (
		<div>
			<Heading title="404 - Page not found" />
		</div>
	)
}

export default NotFound
