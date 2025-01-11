'use client'
import { useDebounce } from '@/hooks/useDebounce'
import { MovieService } from '@/services/movie.service'
import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useState } from 'react'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 300)

	const { isSuccess, data } = useQuery({
		queryKey: ['search movie list', debouncedSearch],
		queryFn: () => MovieService.getMovies(debouncedSearch),
		select: ({ data }) => data,
		enabled: !!debouncedSearch,
	})

	const handlerSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return { handlerSearch, isSuccess, data, searchTerm }
}
