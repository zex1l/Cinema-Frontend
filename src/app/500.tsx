import Heading from '@/components/ui/heading/Heading'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Page not found',
	robots: {
		index: false,
		follow: true,
	},
}

export default function Custom500() {
	return (
		<div>
			<Heading title="500 - Server error" />
		</div>
	)
}
