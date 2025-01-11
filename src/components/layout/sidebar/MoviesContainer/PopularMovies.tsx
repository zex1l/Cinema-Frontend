'use client'
import { useQuery } from '@tanstack/react-query'
import { MovieService } from '@/services/movie.service'
import SkeletonLoader from '@/components/ui/heading/SkeletonLoader'
import MovieList from '@/components/layout/sidebar/MoviesContainer/MovieList'

const PopularMovies = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in side bar'],
		queryFn: () => MovieService.getMostPopularMovies(),
		select: data => data.map(movie => movie).splice(0, 4)
	})
	console.log(popularMovies)
	return isLoading ? (
		<div className="mt-11">
			<SkeletonLoader count={3} className="h-28 mb-4" />
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular movies"
		/>
	)
}

export default PopularMovies
