'use client'
import { FC } from 'react'
import { usePopularGenres } from './usePopularGenre'
import Menu from '../Menu'
import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenreMenu
